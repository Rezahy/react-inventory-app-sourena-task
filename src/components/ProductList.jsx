import { useMemo } from "react";
import useProducts from "../store/products";
import ProductItem from "./ProductItem";
import useFilter from "../store/filter";

const ProductList = () => {
	const products = useProducts((state) => state.products);
	const search = useFilter((state) => state.search);
	const sort = useFilter((state) => state.sort);
	const categoryId = useFilter((state) => state.categoryId);

	const filteredProducts = useMemo(() => {
		let _filteredProduct = [...products];
		if (search) {
			_filteredProduct = _filteredProduct.filter((p) =>
				p.title.includes(search)
			);
		}
		switch (sort) {
			case "latest":
				_filteredProduct = _filteredProduct.sort(
					(a, b) =>
						new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
				);
				break;
			case "earliest":
				_filteredProduct = _filteredProduct.sort(
					(a, b) =>
						new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
				);
		}
		if (categoryId) {
			_filteredProduct = _filteredProduct.filter(
				(product) => product.categoryId === categoryId
			);
		}
		return _filteredProduct;
	}, [products, search, sort, categoryId]);
	return (
		<div className="overflow-x-auto">
			{filteredProducts.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</div>
	);
};
export default ProductList;
