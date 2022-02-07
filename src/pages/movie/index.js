import React, {useMemo} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {Info} from "./Info"
import {Spinner} from "../../components/Spinner";

export const MoviePage = () => {
    const {id} = useParams();
    const movies = useSelector((state) => state.movies);

    const movie = useMemo(() => movies.find((item) => item.id === +id), [id, movies])
    console.log(movie)
    return(
        <Spinner>
            <div className="movie-page">
                <h1>{movie.title}</h1>
                <div className="movie-info">
                    <div>
                        <img src={movie.poster} alt="poster"/>
                        <div className="btn-buy">Buy ticket</div>
                    </div>
                    <div>
                        <Info label="Actors" value={movie.actors.join(', ')}/>
                        <Info label="Genres" value={movie.genre.join(', ')}/>
                        <Info label="Countries" value={movie.country.join(', ')}/>
                        <Info label="Language" value={movie.language}/>
                        <Info label="Age" value={movie.age ? `${movie.age}+`: "No age restrictions"}/>
                        <Info label="Description" value={movie.description}/>
                        <Info label="Trailer" value={
                            <iframe
                                title="video"
                                width="100%"
                                height="400px"
                                src={movie.trailer}
                                allowFullScreen
                            />} />
                    </div>
                </div>
            </div>
        </Spinner>
    )
}