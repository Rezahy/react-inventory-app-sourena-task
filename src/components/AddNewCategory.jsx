import { useRef, useState } from "react";
import useCategory from "../store/category";

const AddNewCategory = () => {
	const [show, setShow] = useState(false);
	const formRef = useRef();
	const addNewCategory = useCategory((state) => state.addNewCategory);
	const openAddNewCategory = () => {
		setShow(true);
	};
	const closeAddNewCategory = (e) => {
		e.preventDefault();
		setShow(false);
	};
	return (
		<section>
			<div className={`mb-8 ${!show && "hidden"} `} id="category-wrapper">
				<h2 className="text-xl text-slate-300 font-bold mb-2">
					Add New category
				</h2>
				<form
					className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
					ref={formRef}
				>
					<div>
						<label
							htmlFor="category-title"
							className="block mb-1 text-slate-400"
						>
							title
						</label>
						<input
							type="text"
							name="title"
							id="category-title"
							className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
						/>
					</div>
					<div>
						<label
							htmlFor="category-description"
							className="block mb-1 text-slate-400"
						>
							description
						</label>
						<textarea
							className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
							type=" text"
							name="description"
							id="category-description"
						></textarea>
					</div>
					<div className="flex items-center justify-between gap-x-4">
						<button
							className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
							id="cancel-add-category"
							onClick={closeAddNewCategory}
						>
							Cancel
						</button>
						<button
							id="add-new-category"
							className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
							onClick={(e) => {
								e.preventDefault();
								const { title, description } = Object.fromEntries(
									new FormData(formRef.current)
								);
								if (title && description) {
									addNewCategory(title, description);
									formRef.current.reset();
								}
							}}
						>
							Add Category
						</button>
					</div>
				</form>
			</div>
			<button
				id="toggle-add-category"
				className="text-slate-600 text-lg mb-4 font-medium false"
				onClick={openAddNewCategory}
			>
				Add new Category?
			</button>
		</section>
	);
};
export default AddNewCategory;
