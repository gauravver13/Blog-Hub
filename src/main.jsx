import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout, Login } from './Components/index.js'
import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost.jsx";
import Signup from './pages/Signup.jsx'
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import AllPosts from "./pages/AllPosts.jsx";

// const childRoute =  [
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "/login",
//         element: (
//             <AuthLayout authentication={false}>
//                 <Login />
//             </AuthLayout>
//         ),
//     },
//     {
//         path: "/signup",
//         element: (
//             <AuthLayout authentication={false}>
//                 <Signup />
//             </AuthLayout>
//         ),
//     },
//     {
//         path: "/all-posts",
//         element: (
//             <AuthLayout authentication>
//                 {" "}
//                 <AllPosts />
//             </AuthLayout>
//         ),
//     },
//     {
//         path: "/add-post",
//         element: (
//             <AuthLayout authentication>
//                 {" "}
//                 <AddPost />
//             </AuthLayout>
//         ),
//     },
//     {
//         path: "/edit-post/:slug",
//         element: (
//             <AuthLayout authentication>
//                 {" "}
//                 <EditPost />
//             </AuthLayout>
//         ),
//     },
//     {
//         path: "/post/:slug",
//         element: <Post />,
//     },
// ]
// const router = createBrowserRouter(
// [{
//     path: "/",
//     element: <App />,
//     children: childRoute
// },
// ])


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>} 
            />
            <Route path="/signup" element={
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>} 
            />
            <Route path="/all-posts" element={
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>}
            />
            <Route path="/add-post" element={
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>}
            />
            <Route path="/edit-post/:slug" element={
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>}
            />
            <Route path="/post/:slug" element={<Post />}
            />
        </Route>
    )
)

//  <Routes>
// {
//     ANDRoutes.map((route, index) => {
//         return <Route key={index} path={route.path} element={route.element} errorElement={<ErrorPage />} />
//     })
// }
// </Routes> 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store= {store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)




// import {
    //     createBrowserRouter,
    //     createRoutesFromElements,
    //     RouterProvider,
    //     Route,
    //   } from "react-router-dom";
    
    //   // You can do this:
    //   const router = createBrowserRouter(
        //     createRoutesFromElements(
            //       <Route path="/" element={<Root />}>
            //         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="about" element={<About />} />
//       </Route>
//     )
//   );
  
//   // Instead of this:
//   const router = createBrowserRouter([
    //     {
        //       path: "/",
//       element: <Root />,
//       children: [
//         {
    //           path: "dashboard",
    //           element: <Dashboard />,
    //         },
    //         {
        //           path: "about",
        //           element: <About />,
        //         },
        //       ],
        //     },
        //   ]);


        // <Route path="/" element={<App />}>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/login" element={
        //         <AuthLayout authentication={false}>
        //             <Login />
        //         </AuthLayout>} 
        //     />
        //     <Route path="/signup" element={
        //         <AuthLayout authentication={false}>
        //             <Signup />
        //         </AuthLayout>} 
        //     />
        //     <Route path="/all-posts" element={
        //         <AuthLayout authentication>
        //             {" "}
        //             <AllPosts />
        //         </AuthLayout>}
        //     />
        //     <Route path="/add-post" element={
        //         <AuthLayout authentication>
        //             {" "}
        //             <AddPost />
        //         </AuthLayout>}
        //     />
        //     <Route path="/edit-post/:slug" element={
        //         <AuthLayout authentication>
        //             {" "}
        //             <EditPost />
        //         </AuthLayout>}
        //     />
        //     <Route path="/post/:slug" element={<Post />}
        //     />
        // </Route>