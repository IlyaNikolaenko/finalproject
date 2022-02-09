import React from "react";
import {Session} from "./Sessions";

export const Day = ({ date, sessions }) => {
    return (
        <div className='day'>
            <h2>{new Date(date).toLocaleDateString()}</h2>
            {
                sessions.map((item) => (
                    <Session key={item.id} {...item} />
                ))
            }
        </div>
    )
}