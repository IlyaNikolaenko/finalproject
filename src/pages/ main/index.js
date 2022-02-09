import React, {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {Input, Select} from "antd";

import {Spinner} from "../../components/Spinner";


export const MainPage = () => {
    const [filterTitle, changeFilterTitle] = useState();
    const [filterGenre, changeFilterGenre] = useState();
    const movies = useSelector((state) => state.movies);

    const genres = useMemo(() => {
        return movies.reduce((acc, item) => {
            item.genre.forEach((el) => {
                if(!acc.includes(el)){
                    acc.push(el);
                }
            })
            return acc
        }, []);
    }, [movies])

    const filteredMovies = useMemo(() => {
        if (filterTitle && !filterGenre){
            return movies.filter((item) => item.title.toLowerCase().includes(filterTitle.toLowerCase()));
        } else if (filterGenre && !filterTitle) {
            return movies.filter((item) => item.genre.includes(filterGenre));
        } else if (filterGenre && filterTitle) {
            return movies.filter((item) => item.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
                item.genre.includes(filterGenre));
        }
        return movies;
    },[movies, filterTitle, filterGenre])

    const handleChangeFilterTitle = (event) => {
        changeFilterTitle(event.target.value)
    }

    return(
        <div>
            <Spinner>
                <div className="filter">
                    <Input value={filterTitle} onChange={handleChangeFilterTitle}/>
                    <Select onChange={changeFilterGenre} allowClear>
                        {genres.map((item) => (
                            <Select.Option key={item} value={item}>{item}</Select.Option>
                        ))}
                    </Select>
                </div>
                <div className="movie-list">
                    {filteredMovies.map((item) => (
                        <Link key={item.id} to={`movie/${item.id}`}>
                            <img src={item.poster} alt=''/>
                            <div className="movie-title">{item.title}</div>
                        </Link>
                    ))}
                </div>
            </Spinner>
        </div>
    )
}