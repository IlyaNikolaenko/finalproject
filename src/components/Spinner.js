import React from "react";
import { Spin } from 'antd';
import { useSelector } from "react-redux";

export const Spinner = ({ children }) => {
    const isLoadingMovies = useSelector((state) => state.isLoadingMovies);
    const isLoadingSchedule = useSelector((state) => state.isLoadingSchedule);

    return (
        <>
            {
                isLoadingMovies || isLoadingSchedule ? (
                    <div className="spinner-wrapper">
                        <Spin />
                    </div>
                ) : children
            }
        </>
    );
};
