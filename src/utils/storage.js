export const CATEGORIES_STORAGE_KEY = "@inventory-app:categories-1.0.0";
export const PRODUCTS_STORAGE_KEY = "@inventory-app:products-1.0.0";

export const getCategoriesFromStorage = () =>
	localStorage[CATEGORIES_STORAGE_KEY] &&
	JSON.parse(localStorage[CATEGORIES_STORAGE_KEY]);

export const getProductsFromStorage = () =>
	localStorage[PRODUCTS_STORAGE_KEY] &&
	JSON.parse(localStorage[PRODUCTS_STORAGE_KEY]);
