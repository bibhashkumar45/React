import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost, { CreatePostAction } from './components/CreatePost.jsx';
import PostList, { postLoader } from './components/PostList.jsx';


const router=createBrowserRouter(
  [
    { path:"/", element: <App/>,
      children:[
        {path:"/",element:<PostList/> , loader:postLoader},
        {path:"create-post",element:<CreatePost/>, action:CreatePostAction},

      ]
    },
  ]
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
