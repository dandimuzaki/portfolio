export default function Section({id, children, className}) {
  return (
    <section id={id} className={`p-8 md:p-16 ${className}`}>
      {children}
    </section>
  )
}