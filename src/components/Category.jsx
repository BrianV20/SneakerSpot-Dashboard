import React from "react";

export function Category(props) {

    return (
        <div className="categoryDiv">
            <h5>{props.name} - {props.count}</h5>
        </div>
    )
}