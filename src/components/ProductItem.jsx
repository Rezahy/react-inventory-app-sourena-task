import PropTypes from "prop-types";
import useProducts from "../store/products";

const ProductItem = ({ id, title, quantity, categoryTitle, createdAt }) => {
	const deleteProduct = useProducts((state) => state.deleteProduct);
	const products = useProducts((state) => state.products);
	console.log(products);
	return (
		<div className="flex items-center justify-between mb-2 w-full min-w-[400px]">
			<span className="text-slate-400">{title}</span>
			<div className="flex items-center gap-x-3">
				<span className="text-slate-400">
					{new Date(createdAt).toLocaleDateString("fa")}
				</span>
				<span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
					{categoryTitle}
				</span>
				<span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
					{quantity}
				</span>
				<button
					className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product"
					onClick={deleteProduct.bind(null, id)}
				>
					delete
				</button>
			</div>
		</div>
	);
};
export default ProductItem;

ProductItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	categoryTitle: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
};
