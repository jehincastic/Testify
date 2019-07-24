import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="scene">
            <div className="planet">
                <div className="crater" />
                <div className="crater" />
                <div className="crater" />
                <div className="crater" />
                <div className="crater" />
                <div className="rover">
                    <div className="body" />
                    <div className="wheels" />
                    <div className="trace" />
                </div>
                <div className="flag">404</div>
            </div>
            <div className="message">
                <p>
                    There is no life, try to find something else.
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;
