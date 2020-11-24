import React, {useState} from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.module.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = ({children}) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar openMenu={sideDrawerToggleHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerToggleHandler} />
            <main className={classes.Content}>
                {children}
            </main>
        </Aux>
    );
};

export default Layout;