import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    return fetch(`${API_URL}/${id}`).then(res => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}