import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
// import Header from './components/header';
// import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Signup from './pages/signup';
import Signin from './pages/signin';

import Nav from './components/landing-page/nav.tsx';
import Homepage from './components/landing-page/homepage.tsx';
import ProductDetails from './components/product-page.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children: [
      {
        index:true,
        element: <Homepage/>
      },
      {
        path:"/shop",
        element: <Shop/>
      },
      {
        path:"/productDetails",
        element: <ProductDetails/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/signin",
        element: <Signin/>
      }
     ]
     }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)


