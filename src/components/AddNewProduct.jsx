import { useRef } from "react";
import useCategory from "../store/category";
import AddNewCategory from "./AddNewCategory";
import useProducts from "../store/products";

const AddNewProduct = () => {
	const categories = useCategory((state) => state.categories);
	const addProducts = useProducts((state) => state.addProducts);
	const findCategoryTitleById = useCategory(
		(state) => state.findCategoryTitleById
	);
	const formRef = useRef();
	const onSubmitHandler = (e) => {
		e.preventDefault();
		let { title, quantity, categoryId } = Object.fromEntries(
			new FormData(formRef.current)
		);
		quantity = parseInt(quantity);
		if (title.length && quantity > -1 && categoryId) {
			const categoryTitle = findCategoryTitleById(categoryId);
			addProducts(title, quantity, categoryTitle, categoryId);
			formRef.current.reset();
		}
	};
	return (
		<section className="w-full">
			<AddNewCategory />
			<div className="mb-10">
				<h2 className="text-xl text-slate-300 font-bold mb-2">
					Add New Product
				</h2>
				<form
					className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
					ref={formRef}
					onSubmit={onSubmitHandler}
				>
					<div>
						<label
							htmlFor="product-title"
							className="block mb-1 text-slate-400"
						>
							title
						</label>
						<input
							type="text"
							name="title"
							id="product-title"
							className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
						/>
					</div>
					<div>
						<label
							htmlFor="product-quantity"
							className="block mb-1 text-slate-400"
						>
							quantity
						</label>
						<input
							className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
							type="number"
							name="quantity"
							id="product-quantity"
							defaultValue="0"
						/>
					</div>
					<div>
						<label
							htmlFor="product-category"
							className="block mb-1 text-slate-400"
						>
							category
						</label>
						<select
							name="categoryId"
							id="product-category"
							className="bg-transparent text-slate-400 rounded-xl w-full"
						>
							<option className="bg-slate-500 text-slate-300" value="">
								select a category
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
					<div className="flex items-center justify-between gap-x-4">
						<button
							id="add-new-product"
							className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
						>
							Add new Product
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default AddNewProduct;
