import React from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({children, modalClosed, show}) => {
    return (
        <Aux>
            <Backdrop show={show} clicked={modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: show ? 'translateY(-50%)' : 'translateY(-1000vh)',
                    opacity: show ? '1' : '0'
                }}>
                {children}
            </div>
        </Aux>
    );
};

export default React.memo(Modal,
    (prevProps, nextProps) => (
    prevProps.show === nextProps.show
    || prevProps.children === nextProps.children
));