// useFetchGroceryItems
import { useQuery } from 'react-query';
import {fetchGroceryItems} from "../api/fetchGroceryItems"

export const useFetchGroceryItems = (token) => {
  return useQuery('groceryItems', () => fetchGroceryItems(token));
};