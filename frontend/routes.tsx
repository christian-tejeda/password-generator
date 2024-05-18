import MainLayout from 'Frontend/views/MainLayout.js';
import {lazy} from 'react';
import {createBrowserRouter, RouteObject} from 'react-router-dom';
import PasswordView from "Frontend/views/password/PasswordView";

const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

const routing = [
    {
        element: <MainLayout/>,
        handle: {title: 'Main'},
        children: [
            { path: '/password', element: <PasswordView/>, handle: { title: 'Password Generator' }},
            { path: '/about', element: <AboutView/>, handle: { title: 'About' } },
        ],
    },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
