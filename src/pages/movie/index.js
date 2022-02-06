import React, {useMemo} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {Info} from "./Info"
import {Spinner} from "../../components/Spinner";

export const MoviePage = () => {
    const {id} = useParams();
    const movies = useSelector((state) => state.movies);

    const movie = useMemo(() => movies.find((item) => item.id === +id), [id, movies])

    return(
        <Spinner>
            <div className="movie-page">
                <h1>{movie.title}</h1>
                <div className="movie-info">
                    <div>
                        <img src={movie.url} alt="poster"/>
                        <div className="btn-buy">Buy ticket</div>
                    </div>
                    <div>
                        <Info label="Actors" value={movie.actors.join(", ")}/>
                    </div>
                </div>
            </div>
        </Spinner>
    )
}