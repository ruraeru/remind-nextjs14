export default async function MovieDetail({ params }) {
    const { id } = await params;
    return <h1>Movie {id}</h1>
}