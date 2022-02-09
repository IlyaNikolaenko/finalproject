import React from 'react';
import { Link } from "react-router-dom";

export const Session = ({ movie, date, room }) => {
    return (
        <div className="session">
            <div>
                <Link to={`/movie/${movie.id}`}>
                    <img src={movie.poster} alt="poster"/>
                </Link>
                <div className="session-info">
                    <h3>{movie.title}</h3>
                    <div className="time">
                        {new Date(date).toLocaleTimeString()}
                    </div>
                    <div className="room">{room.label}</div>
                </div>
            </div>
            <div>
                <div className="btn-buy">Buy ticket</div>
            </div>
        </div>
    );
};
