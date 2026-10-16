export default function Container({ children, className = "" }) {
  return <div className={`site-wrap ${className}`}>{children}</div>;
}
