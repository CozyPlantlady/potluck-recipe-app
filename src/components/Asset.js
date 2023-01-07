import React from "react";
import { Spinner } from "react-bootstrap";


const Asset = ({ spinner, message }) => {
    return (
        <div>
            {spinner && <Spinner animation="border" />}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Asset;