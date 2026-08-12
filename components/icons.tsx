type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WebsiteIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="6.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ProcessIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="5.5" cy="6" r="2.25" />
      <circle cx="5.5" cy="18" r="2.25" />
      <circle cx="18.5" cy="12" r="2.25" />
      <path d="M7.5 6.9 16.5 11" />
      <path d="M7.5 17.1 16.5 13" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 8 4.5 12 9 16" />
      <path d="M15 8 19.5 12 15 16" />
      <line x1="13" y1="5.5" x2="11" y2="18.5" />
    </svg>
  );
}

export function HealthCheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5" />
      <path d="M8 13.5h2.2l1.3-2.4 1.6 4.2 1.2-1.8H16" />
    </svg>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5c2.5 1.6 4 4.5 4 8 0 2-.6 3.7-1.3 5l-2.7 3-2.7-3C8.6 14.2 8 12.5 8 10.5c0-3.5 1.5-6.4 4-8Z" />
      <circle cx="12" cy="9.5" r="1.6" />
      <path d="M8.5 14.5 5.5 16l.6-3.4" />
      <path d="M15.5 14.5 18.5 16l-.6-3.4" />
      <path d="M10 20.5c-.6-.6-.9-1.4-.9-2.5h5.8c0 1.1-.3 1.9-.9 2.5" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 6.5 12 13 20 6.5" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8" cy="8.5" r="0.75" fill="currentColor" stroke="none" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
      <line x1="12" y1="11" x2="12" y2="17" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export const serviceIcons = {
  website: WebsiteIcon,
  process: ProcessIcon,
  code: CodeIcon,
  healthcheck: HealthCheckIcon,
  rocket: RocketIcon,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
