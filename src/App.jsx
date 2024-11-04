import AddNewProduct from "./components/AddNewProduct";
import FilterProducts from "./components/FilterProducts";
import Header from "./components/Header";

function App() {
	return (
		<div>
			<div className="bg-slate-800 min-h-screen">
				<Header />
				<div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen-xl md:gap-x-12">
					<AddNewProduct />
					<FilterProducts />
				</div>
			</div>
		</div>
	);
}

export default App;
