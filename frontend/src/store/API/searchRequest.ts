export const searchAPIRequest = async (query: string) => {
  const params = new URLSearchParams({ q: query });
  const response = await fetch(`http://localhost:6006/api/search?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
