import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import ProductsPage from './pages/Products.jsx'
import RootLayout from './pages/Root.jsx'
import ErrorPage from './pages/Error.jsx'
import ProductDetailPage from './pages/ProductDetal.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/products', element: <ProductsPage /> },
			{ path: '/products/:productId', element: <ProductDetailPage /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
