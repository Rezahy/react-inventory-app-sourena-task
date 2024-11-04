import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { v4 as uuidv4 } from "uuid";
import { getProductsFromStorage, PRODUCTS_STORAGE_KEY } from "../utils/storage";

const productsInitialValue = getProductsFromStorage() || [];

const useProducts = create(
	immer((set, get) => ({
		products: productsInitialValue,
		addProducts: (title, quantity, categoryTitle, categoryId) => {
			set((state) => {
				const createdAt = new Date().toJSON();
				const productId = uuidv4();
				state.products.push({
					title,
					quantity,
					categoryTitle,
					categoryId,
					id: productId,
					createdAt,
				});
			});
			get().addNewProductToStorage();
		},
		deleteProduct: (id) => {
			set((state) => {
				state.products = state.products.filter((product) => product.id != id);
			});
			get().deleteProductFromStorage();
		},
		addNewProductToStorage: () => {
			localStorage[PRODUCTS_STORAGE_KEY] = JSON.stringify(get().products);
		},
		deleteProductFromStorage: () => {
			localStorage[PRODUCTS_STORAGE_KEY] = JSON.stringify(get().products);
		},
	}))
);

export default useProducts;
