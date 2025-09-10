export default async function Page({
    params
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <div>You are at docsAll/{slug.join('/')} page.</div>
        );
    } else if (slug?.length === 1) {
        return (
            <div>You are at docsAll/{slug[0]} page. 1 level.</div>
        );
    }
    return (
        <div>You are at docsAll/{slug?.join('/')} page. Rest.</div>
    );
}