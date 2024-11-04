import useCategory from "../store/category";
import useFilter from "../store/filter";
import ProductList from "./ProductList";

const FilterProducts = () => {
	const categories = useCategory((state) => state.categories);
	const onSearchChange = useFilter((state) => state.onSearchChange);
	const onSortChange = useFilter((state) => state.onSortChange);
	const onCategoryIdChange = useFilter((state) => state.onCategoryIdChange);
	const search = useFilter((state) => state.search);
	const sort = useFilter((state) => state.sort);
	const categoryId = useFilter((state) => state.categoryId);
	return (
		<section className="w-full">
			<div className="mb-6">
				<h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b">
					Filters
				</h2>
				<div className="flex items-center justify-between mb-6">
					<label htmlFor="search-input" className="text-slate-500 text-lg">
						search
					</label>
					<input
						type="text"
						name="search-input"
						id="search-input"
						className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
						value={search}
						onChange={(e) => onSearchChange(e.target.value)}
					/>
				</div>
				<div className="flex items-center justify-between mb-6">
					<label htmlFor="sort-products" className="text-slate-500 text-lg">
						sort
					</label>
					<select
						name="sort-products"
						id="sort-products"
						className="bg-transparent text-slate-400 rounded-xl"
						value={sort}
						onChange={(e) => onSortChange(e.target.value)}
					>
						<option className="bg-slate-500 text-slate-300" value="">
							select a category
						</option>
						<option className="bg-slate-500 text-slate-300" value="latest">
							latest
						</option>
						<option className="bg-slate-500 text-slate-300" value="earliest">
							earliest
						</option>
					</select>
				</div>
				<div className="flex items-center justify-between mb-6">
					<label htmlFor="sort-products" className="text-slate-500 text-lg">
						Category
					</label>
					<select
						name="sort-products"
						id="sort-products"
						className="bg-transparent text-slate-400 rounded-xl"
						value={categoryId}
						onChange={(e) => onCategoryIdChange(e.target.value)}
					>
						<option className="bg-slate-500 text-slate-300" value="">
							All
						</option>
						{categories.map(({ id, title }) => (
							<option
								key={id}
								className="bg-slate-500 text-slate-300"
								value={id}
							>
								{title}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="">
				<h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
					ProductList
				</h2>
				<div className="overflow-x-auto">
					<ProductList />
				</div>
			</div>
		</section>
	);
};
export default FilterProducts;
