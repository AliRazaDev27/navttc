import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProductDetails from './pages/product-details.tsx';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import store from './store'
import { Provider } from 'react-redux'
import Header from './components/header.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: "/:id",
        element: <ProductDetails/>
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)


