import axios from "axios";

import {
    SET_SCHEDULE_DATA_PENDING,
    SET_SCHEDULE_DATA_FAIL,
    SET_SCHEDULE_DATA,
    SESSIONS_URL
} from "../constants";

const setScheduleDataPending = () => ({type: SET_SCHEDULE_DATA_PENDING});
const setScheduleData = (payload) => ({type: SET_SCHEDULE_DATA, payload});
const setScheduleDataFail = () => ({type: SET_SCHEDULE_DATA_FAIL});

export const  getScheduleData = () => {
    return (dispatch) => {
        dispatch(setScheduleDataPending());
        axios.get(SESSIONS_URL)
            .then(({data}) => dispatch(setScheduleData(data.sessions)))
            .catch(() => dispatch(setScheduleDataFail()));
    }
}