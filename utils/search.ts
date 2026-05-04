export default async function handleSearch(term : string) {

    const searchTerm = term.trim();

    if (!searchTerm) {
        return [];
    }

    const response = await fetch(`/api/stores?q=${encodeURIComponent(searchTerm)}`);

    if (!response.ok) {
        throw new Error('Failed to search stores');
    }

    return response.json();
}