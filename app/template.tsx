/** Re-mounts on every navigation, replaying the page-enter animation.
 *  overflow-x-clip stops scroll-reveal transforms (±32px) from causing
 *  momentary horizontal scrolling on touch devices, without creating a
 *  scroll container (which would break the sticky header). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter overflow-x-clip">{children}</div>
}
