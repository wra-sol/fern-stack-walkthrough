export const fetchGroceryItems = async (token) => {
    const response = await fetch(`/api/data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Error fetching grocery items: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  };