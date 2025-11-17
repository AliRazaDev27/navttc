import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import store from './store'
import { Provider } from 'react-redux'
import Header from './components/header';
import Homepage from './pages/homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        index:true,
        element: <Homepage/>
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


