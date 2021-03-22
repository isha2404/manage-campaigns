import {connect} from 'react-redux';
import CampaignTable from './CampaignTable';

const mapStateToProps = (state) => ({
    isPriceModalOpen: state.isPriceModalOpen,
    priceDetailsRow: state.rowDetails,
    isCalendarOpen: state.isCalendarOpen,
    updatedDate: state.updatedDate,
    name: state.name,
    tabIndex: state.tabIndex
});

const mapDispatchToProps = (dispatch) => {
    return {
        openPriceModal: ({isPriceModalOpen, rowDetails}) => {
            dispatch({
                type: 'OPEN_PRICE_MODAL',
                payload: {
                    isPriceModalOpen,
                    rowDetails
                }
            })
        },
        openCalendar: ({isCalendarOpen, name}) => {
            dispatch({
                type: 'OPEN_CALENDAR',
                payload: {isCalendarOpen, name}
            })
        },
        updateDate: ({updatedDate, isCalenderOpen}) => {
            dispatch({
                type: 'UPDATE_DATE',
                payload: {
                    updatedDate, isCalenderOpen
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignTable);