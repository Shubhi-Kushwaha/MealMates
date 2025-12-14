import { createSelector } from 'reselect';

const selectCartState = (state) => state.cart || { items: [] };

export const selectCartItemCount = createSelector([selectCartState], (cart) =>
  (cart.items || []).reduce((sum, it) => sum + (it.quantity || 1), 0)
);

export const selectCartTotal = createSelector([selectCartState], (cart) =>
  (cart.items || []).reduce((sum, it) => sum + Number(it.price || 0) * (it.quantity || 1), 0)
);

export const selectCartItem = createSelector(
  [selectCartState, (_, itemId) => itemId],
  (cart, itemId) => (cart.items || []).find((i) => String(i.id) === String(itemId)) || null
);