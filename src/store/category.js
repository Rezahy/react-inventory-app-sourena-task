import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { v4 as uuidv4 } from "uuid";
import {
	CATEGORIES_STORAGE_KEY,
	getCategoriesFromStorage,
} from "../utils/storage";

const categoriesInitialValue = getCategoriesFromStorage() || [];

const useCategory = create(
	immer((set, get) => ({
		categories: categoriesInitialValue,
		addNewCategory: (title, description) => {
			set((state) => {
				const createdAt = new Date().toJSON();
				const categoryId = uuidv4();
				state.categories.push({
					id: categoryId,
					title,
					description,
					createdAt,
				});
			});
			get().addNewCategoryToStorage();
		},
		findCategoryTitleById: (id) => {
			const categories = get().categories;
			return categories.find((category) => category.id === id).title;
		},
		addNewCategoryToStorage: () => {
			localStorage[CATEGORIES_STORAGE_KEY] = JSON.stringify(get().categories);
		},
	}))
);

export default useCategory;
