export default async function MovieDetail({ params }) {
    const { id } = await params;
    return <h1>Movie {id}</h1>
}

function MovieDetail1({
    props: { id }
}: {
    props: { id: string }
}) {
    return <h1>Movie {id}</h1>
}