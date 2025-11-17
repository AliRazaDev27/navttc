import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import store from './store'
import { Provider } from 'react-redux'
// import Header from './components/header';
// import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Signup from './pages/signup';
import Signin from './pages/signin';

import Nav from './components/landing-page/nav.tsx';
import Homepage from './components/landing-page/homepage.tsx';
import Footer from './components/footer.tsx';
import Product from './pages/product/index.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children: [
      {
        element: <Footer/>,
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
        path:"/product",
        element: <Product/>
      },
        ]
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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)


