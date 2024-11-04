import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useFilter = create(
	immer((set) => ({
		search: "",
		sort: "latest",
		categoryId: "",
		onSearchChange: (s) =>
			set((state) => {
				state.search = s;
			}),
		onSortChange: (newSortFilter) =>
			set((state) => {
				state.sort = newSortFilter;
			}),
		onCategoryIdChange: (newCategoryId) => {
			set((state) => {
				state.categoryId = newCategoryId;
			});
		},
	}))
);

export default useFilter;
