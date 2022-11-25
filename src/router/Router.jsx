import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
    } from "react-router-dom";
import Root from '../components/Root/Root';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import TestPageContainer from '../containers/TestPageContainer/TestPageContainer';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "/",
                element: <HomeContainer/>
            },
            {
                path: "/:client",
                element: <TestPageContainer/>
            }
        ]
    },
    ]);

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router