export type IconName =
  | "signal"
  | "truck"
  | "shield"
  | "cart"
  | "check"
  | "x"
  | "chevron"
  | "arrow"
  | "bolt"
  | "play"
  | "phone"
  | "clock"
  | "lock"
  | "activity"
  | "list"
  | "menu"
  | "alert"
  | "copy";

export const iconPaths: Record<IconName, string> = {
  signal: `<path d="M2 12c3-5 7-7 10-7s7 2 10 7"/><path d="M6 14c2-3 4-4 6-4s4 1 6 4"/><circle cx="12" cy="18" r="1.5"/>`,
  truck: `<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>`,
  shield: `<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>`,
  cart: `<path d="M3 4h2l2.5 11.5a2 2 0 002 1.5h8a2 2 0 002-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>`,
  check: `<path d="M5 12.5l4 4 10-10"/>`,
  x: `<path d="M6 6l12 12M18 6L6 18"/>`,
  chevron: `<path d="M6 9l6 6 6-6"/>`,
  arrow: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  bolt: `<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>`,
  play: `<path d="M6 4l14 8-14 8V4z"/>`,
  phone: `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  lock: `<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>`,
  activity: `<path d="M3 12h4l3-8 4 16 3-8h4"/>`,
  list: `<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>`,
  menu: `<path d="M3 6h18M3 12h18M3 18h18"/>`,
  alert: `<path d="M10.3 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>`,
  copy: `<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2h3"/>`,
};
