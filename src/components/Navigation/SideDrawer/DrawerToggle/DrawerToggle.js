import Button from "../../../UI/Button/Button";
import React from "react";
import PropTypes from "prop-types";
import classes from "./DrawerToggle.module.css";


const DrawerToggle = (props) => {
    return (
        <div className={classes.DrawerToggle}>
            <Button clicked={props.clicked}>
                <div/>
                <div/>
                <div/>
            </Button>
        </div>
    );
}

DrawerToggle.propTypes = {
    clicked: PropTypes.func
};

export default DrawerToggle;