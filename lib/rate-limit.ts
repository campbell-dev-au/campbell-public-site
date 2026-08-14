// In-memory fixed-window rate limiter. State is per lambda instance and
// resets on cold start — an acceptable tradeoff for a low-volume,
// single-mailbox contact form (see CLAUDE.md's SMTP-over-Resend reasoning).

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const FALLBACK_KEY = "unknown";

type Bucket = { count: number; windowStart: number };

const buckets = new Map<string, Bucket>();

export function rateLimitKeyFromHeaders(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  const firstIp = forwardedFor?.split(",")[0]?.trim();
  return firstIp || FALLBACK_KEY;
}

// Buckets for IPs that never come back would otherwise sit in memory
// forever on a long-lived (Fluid Compute) instance. Pruning expired
// entries on each call keeps the map bounded to recently-active keys —
// cheap at this site's traffic volume, no timers/intervals needed.
function pruneExpired(now: number) {
  for (const [key, bucket] of buckets) {
    if (now - bucket.windowStart >= WINDOW_MS) {
      buckets.delete(key);
    }
  }
}

export function checkRateLimit(
  key: string,
  now: number = Date.now(),
): { allowed: boolean; retryAfterSeconds?: number } {
  pruneExpired(now);

  const bucket = buckets.get(key);

  if (!bucket) {
    buckets.set(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (bucket.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((bucket.windowStart + WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  bucket.count += 1;
  return { allowed: true };
}

/** Test-only: clears all rate limiter state between test cases. */
export function __resetRateLimiter() {
  buckets.clear();
}

/** Test-only: number of keys currently tracked, to assert pruning behavior. */
export function __rateLimiterSize() {
  return buckets.size;
}
