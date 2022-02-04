import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom"

import {MainPage} from "../pages/ main";
import{Schedule} from "../pages/schedule";
import {BaseLayout} from "./Layout";
import {getMovies} from "../actions/movies";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    },[dispatch])

    return (
       <Routes>
           <Route path='/' element={<BaseLayout />}>
               <Route index element={<MainPage />}/>
               <Route path="schedule" element={<Schedule />}/>
           </Route>
       </Routes>
    );
}

export default App;
