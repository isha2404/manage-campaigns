import moment from 'moment';

const campaignTableReduxReducer = (state = {
    isPriceModalOpen: false,
    rowDetails: {},
    isCalendarOpen: false,
    name: '',
    updatedDate: moment()
}, action) => {
    switch (action.type) {
        case 'OPEN_PRICE_MODAL': {
            return {
                ...state,
                isPriceModalOpen: action.payload.isPriceModalOpen,
                rowDetails: action.payload.rowDetails
            };
        }
        case 'OPEN_CALENDAR': {
            return {
                ...state,
                isCalendarOpen: action.payload.isCalendarOpen,
                name: action.payload.name
            };
        }
        case 'UPDATE_DATE': {
            return {
                ...state,
                updatedDate: action.payload.updatedDate,
                isCalendarOpen: action.payload.isCalendarOpen
            };
        }
        default:
    }
    return state;
};

export default campaignTableReduxReducer;