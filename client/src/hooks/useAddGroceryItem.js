//useAddGroceryItem.js
import {useMutation} from 'react-query';
import {addGroceryItem} from '../api/addGroceryItem';

export const useAddGroceryItem = (token, queryClient) => {
  const mutation = useMutation ({
    mutationFn: groceryItem => addGroceryItem (groceryItem, token),
    onMutate: async (groceryItem) => {
      await queryClient.cancelQueries({queryKey : ['groceryItems']});
      const prevItems = queryClient.getQueryData(['groceryItems']);
      queryClient.setQueryData(['groceryItems'], (old) => {old, old[groceryItem.id] = groceryItem});
      return {prevItems}
    },
    onError: (error, groceryItem, context) => {
      console.log ('An error occurred while adding the grocery item: ', groceryItem, 'Error: ', error);
      queryClient.setQueryData(['groceryItems'], context.prevItems)
      return context.prevItems
    },
    onSuccess: (data, context) => {
    console.log ('Grocery item added successfully:', data);

    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['groceryItems']})
    }
  });

  return mutation;
};
