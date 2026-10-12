import type { ReactNode } from 'react';

// Next.js remounts the template on navigation, replaying the lightweight
// entrance without intercepting links, scrolling, history or keyboard input.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
