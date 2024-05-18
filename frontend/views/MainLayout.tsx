import {AppLayout} from '@hilla/react-components/AppLayout.js';
import {DrawerToggle} from '@hilla/react-components/DrawerToggle.js';
import { Tabs } from '@hilla/react-components/Tabs.js';
import { Tab } from '@hilla/react-components/Tab.js';
import {useRouteMetadata} from 'Frontend/util/routing.js';
import {Suspense, useEffect} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {Icon} from "@hilla/react-components/Icon";

const navLinkClasses = ({isActive}: any) => {
    return `block rounded-m p-s ${isActive ? 'bg-primary-10 text-primary' : 'text-body'}`;
};

export default function MainLayout() {
    const currentTitle = useRouteMetadata()?.title ?? 'Password Generator';
    useEffect(() => {
        document.title = currentTitle;
    }, [currentTitle]);

    return (
        <AppLayout>

            <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
            <h1 slot="navbar" className="font-semibold text-l">
                {currentTitle}
            </h1>

            <Tabs slot="drawer" orientation="vertical">
                <Tab>
                    <NavLink className={navLinkClasses} to={"/password"}>
                        Password Generator
                    </NavLink>
                </Tab>
                <Tab>
                    <NavLink className={navLinkClasses} to="/about">
                        About
                    </NavLink>
                </Tab>
            </Tabs>

            <Suspense>
                <Outlet/>
            </Suspense>
        </AppLayout>
    );
}
