import { Link } from 'react-router-dom'

function ProductsPage() {
	return (
		<>
			<h1>The Products Page</h1>
			<ul>
				<li>
					<Link to='./1'>Product 1</Link>
				</li>
				<li>Product 2</li>
				<li>Product 3</li>
			</ul>
		</>
	)
}
export default ProductsPage
