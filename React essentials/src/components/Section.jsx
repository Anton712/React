export default function Section({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>Section Title</h2>
            {children}
        </section>
    );
}