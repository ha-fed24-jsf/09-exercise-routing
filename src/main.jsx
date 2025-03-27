import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Start from './pages/Start.jsx'
import Products from './pages/Products.jsx'

const router = createHashRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: Start
			},
			{
				path: "/products",
				Component: Products
			}
			// /
			// /products
			// /details/:id?
		]
	}
])


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
