export const addGroceryItem = async (groceryItem, token) => {
    const response = await fetch(`/api/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({userData: groceryItem}),
    });
  
    if (!response.ok) {
      throw new Error(`Error adding grocery item: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  };