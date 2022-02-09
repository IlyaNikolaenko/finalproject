import {
    SET_MOVIES,
    SET_MOVIES_FAIL,
    SET_SCHEDULE_DATA_FAIL,
    SET_SCHEDULE_DATA_PENDING,
    SET_SCHEDULE_DATA
} from "../constants";

const defaultValue = {
    isLoadingMovies: true,
    isLoadingSchedule: false,
    movies: [],
    sessions: []
}

export const rootReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                isLoadingMovies: false,
                movies: action.payload
            }
        }
        case SET_MOVIES_FAIL: {
            return {
                ...state,
                isLoadingMovies: false
            };
        }
        case SET_SCHEDULE_DATA_PENDING: {
            return {
                ...state,
                isLoadingSchedule: true
            };
        }
        case SET_SCHEDULE_DATA_FAIL: {
            return {
                ...state,
                isLoadingSchedule: false
            };
        }
        case SET_SCHEDULE_DATA: {
            const result = action.payload.reduce((acc, item) => {
                const [date] = item.date.split('T');
                const hasObjectByDate = acc.some((el) => el.date === date);

                if (hasObjectByDate) {
                    return acc.map((el) => {
                        if (el.date === date) {
                            return {
                                ...el,
                                sessions: [...el.sessions, item]
                            };
                        }

                        return el;
                    });
                }
                return [...acc, { date, sessions: [item] }];
            }, []);

            result.forEach((item) => {
                item.sessions.sort((a, b) => a.date > b.date ? 1 : -1)
            });

            return {
                ...state,
                isLoadingSchedule: false,
                sessions: result.sort((a, b) => a.date > b.date ? 1 : -1)
            };
        }
        default: {
            return state;
        }
    }
};
