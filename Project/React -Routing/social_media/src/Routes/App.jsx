import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { useState } from 'react';
import PostcontextProvider from '../store/Post-store-app';
function App() {

  const [selectTab,setSelectTab]=useState("Home");




  return (
    <PostcontextProvider>
    <div className="app-container">
     <SideBar selectTab={selectTab} setSelectTab={setSelectTab} ></SideBar>
     <div className='Content'>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
    </div>
    </PostcontextProvider>
   



  
  )
}

export default App
