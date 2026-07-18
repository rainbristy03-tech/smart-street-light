const API_URL = "http://localhost:5000/api";

export async function getLights() {
  const response = await fetch(`${API_URL}/lights`);

  if (!response.ok) {
    throw new Error("Failed to fetch lights");
  }

  return response.json();
}