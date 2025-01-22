// db.ts
export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://677fff420476123f76a91d26.mockapi.io/eceommeceweb"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Fetch data and store it in a constant
export const demoData = await fetchData();
