import React from "react";
import {Spin} from "antd";
import {useSelector} from "react-redux";

export const Spinner = ({children}) => {
    const isLoading = useSelector((state) => state.isLoadingMovies);

    return isLoading ? (
        <Spin />
    ) : children;
}