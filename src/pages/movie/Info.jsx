import React from "react";
export const Info = ({label, value}) => {
    return(
        <div>
            <h3>{label}</h3>
            <div>{value}</div>
        </div>
    )
}