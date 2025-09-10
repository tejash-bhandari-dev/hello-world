export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
            <h2>Products Layout</h2>
        </section>
    );
}