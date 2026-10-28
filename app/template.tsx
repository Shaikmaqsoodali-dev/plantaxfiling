/** Re-mounts on every navigation, replaying the page-enter animation. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
