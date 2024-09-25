import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Forum from './components/forum.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
path: "/",
element: <App/>,
  },{
path:"/forum",
element: <Forum />,
  },
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider  router={router}/>

)
