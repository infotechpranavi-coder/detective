/**
 * Intentionally a no-op wrapper: Framer Motion page transitions added long main-thread tasks
 * (layout reads + animation) and inflated Total Blocking Time in Lighthouse.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
