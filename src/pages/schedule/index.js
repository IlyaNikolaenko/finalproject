import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getScheduleData} from "../../actions/schedule";
import {Spinner} from "../../components/Spinner";
import {Day} from "./Day";

export const SchedulePage = () => {
    const dispatch = useDispatch();
    const schedule = useSelector((state) => state.sessions);

    useEffect(() => {
        dispatch(getScheduleData());
    }, [dispatch])

    return(
        <Spinner>
            <div>
                {
                    schedule.map((item) => (
                        <Day key={item.date} {...item}/>
                    ))
                }
            </div>
        </Spinner>
    )
}