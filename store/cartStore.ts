import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;

  ownerName: string;
  ownerAvatar: string;

  instructions?: string;

  updatedAt: number;
};

type CartStore = {
  cart: CartItem[];

  addItem: (
    item: Omit<CartItem, "updatedAt">
  ) => void;

  removeItem: (
    id: string
  ) => void;

  increaseQuantity: (
    id: string
  ) => void;

  decreaseQuantity: (
    id: string
  ) => void;

  updateInstructions: (
    id: string,
    instructions: string
  ) => void;

  setCart: (
    cart: CartItem[]
  ) => void;

  clearCart: () => void;

  getSubtotal: () => number;

  getGST: () => number;

  getGrandTotal: () => number;
};

function getCartKey() {

  if (
    typeof window ===
    "undefined"
  ) {

    return "sharedCart";

  }

  const tableId =
    window.location.pathname
      .split("/")
      .pop();

  return `sharedCart-${tableId}`;

}

function saveCart(
  cart: CartItem[]
) {

  if (
    typeof window !==
    "undefined"
  ) {

    localStorage.setItem(
      getCartKey(),
      JSON.stringify(cart)
    );

  }

}

export const useCartStore =
  create<CartStore>(
    (set, get) => ({

      cart: [],

      setCart: (cart) => {

        saveCart(cart);

        set({ cart });

      },

      addItem: (item) =>
        set((state) => {

          let updated;

          const existing =
            state.cart.find(
              (cartItem) =>
                cartItem.id ===
                item.id
            );

          if (existing) {

            updated =
              state.cart.map(
                (
                  cartItem
                ) =>
                  cartItem.id ===
                  item.id
                    ? {
                        ...cartItem,
                        quantity:
                          cartItem.quantity +
                          1,
                        updatedAt:
                          Date.now(),
                      }
                    : cartItem
              );

          } else {

            updated = [
              ...state.cart,
              {
                ...item,
                quantity: 1,
                updatedAt:
                  Date.now(),
              },
            ];

          }

          saveCart(updated);

          return {
            cart: updated,
          };

        }),

      removeItem: (id) =>
        set((state) => {

          const updated =
            state.cart.filter(
              (item) =>
                item.id !== id
            );

          saveCart(updated);

          return {
            cart: updated,
          };

        }),

      increaseQuantity:
        (id) =>
          set((state) => {

            const updated =
              state.cart.map(
                (item) =>
                  item.id === id
                    ? {
                        ...item,
                        quantity:
                          item.quantity +
                          1,
                        updatedAt:
                          Date.now(),
                      }
                    : item
              );

            saveCart(updated);

            return {
              cart: updated,
            };

          }),

      decreaseQuantity:
        (id) =>
          set((state) => {

            const updated =
              state.cart
                .map(
                  (item) =>
                    item.id ===
                    id
                      ? {
                          ...item,
                          quantity:
                            item.quantity -
                            1,
                          updatedAt:
                            Date.now(),
                        }
                      : item
                )
                .filter(
                  (item) =>
                    item.quantity >
                    0
                );

            saveCart(updated);

            return {
              cart: updated,
            };

          }),

      updateInstructions:
        (
          id,
          instructions
        ) =>
          set((state) => {

            const updated =
              state.cart.map(
                (item) =>
                  item.id ===
                  id
                    ? {
                        ...item,
                        instructions,
                        updatedAt:
                          Date.now(),
                      }
                    : item
              );

            saveCart(updated);

            return {
              cart: updated,
            };

          }),

      clearCart: () => {

        saveCart([]);

        set({
          cart: [],
        });

      },

      getSubtotal: () =>

        get().cart.reduce(
          (
            sum,
            item
          ) =>
            sum +
            item.price *
              item.quantity,
          0
        ),

      getGST: () =>

        get().cart.reduce(
          (
            sum,
            item
          ) => {

            const rate =
              item.price >=
              300
                ? 0.12
                : 0.05;

            return (
              sum +
              item.price *
                item.quantity *
                rate
            );

          },
          0
        ),

      getGrandTotal:
        () => {

          const subtotal =
            get().getSubtotal();

          const gst =
            get().getGST();

          return (
            subtotal +
            gst
          );

        },

    })
  );