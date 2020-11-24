import React from 'react';
import classes from './BuildControl.module.css'
import PropTypes from 'prop-types';

const BuildControl = ({label, removed, disabled, added}) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button
                className={classes.Less}
                onClick={removed}
                disabled={disabled}>Less</button>
            <button
                className={classes.More}
                onClick={added}>More</button>
        </div>
    );
};

BuildControl.propTypes = {
    label: PropTypes.string,
};

export default BuildControl;