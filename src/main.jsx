import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Start from './pages/Start.jsx'

const router = createHashRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: Start
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
