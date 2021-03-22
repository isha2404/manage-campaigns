import React, {useState} from 'react';
import CampaignTableBody from './CampaignTableBody';
import {campaignRows, campaignType} from './helper';
import SimpleFormattedMessage from './SimpleFormattedMessage';
import {IntlProvider} from 'react-intl';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import PriceModal from './PriceModal';
import {Calendar} from 'react-calendar';

export default function CampaignTable({index, isPriceModalOpen, priceDetailsRow, openPriceModal, openCalendar, isCalendarOpen,
                                          updateDate, updatedDate, name}) {
    const [dateState, setDateState] = useState(new Date());
    // const currentSelectedRow = campaignRows.filter(row => row.name === name);
    const changeDate = e => {
        setDateState(e);
        updateDate({updatedDate: e, isCalenderOpen: false});
    };
    return (
        <IntlProvider>
            <table className="campaignTable">
                <thead>
                <tr>
                    <SimpleFormattedMessage tagName="th"
                                            className="date"
                                            id="app.manageCampaign.header.date"
                                            defaultMessage="DATE"/>
                    <SimpleFormattedMessage tagName="th"
                                            className="campaign"
                                            id="app.manageCampaign.header.campaign"
                                            defaultMessage="CAMPAIGN"/>
                    <SimpleFormattedMessage tagName="th"
                                            className="view"
                                            id="app.manageCampaign.header.view"
                                            defaultMessage="VIEW"/>
                    <SimpleFormattedMessage tagName="th"
                                            className="action"
                                            id="app.manageCampaign.header.action"
                                            defaultMessage="ACTION"/>
                </tr>
                </thead>
                <tbody>
                {campaignRows.map(row => {
                    const date = name === row.name && updatedDate ? updatedDate : row.createdOn;
                    if (campaignType(date) === 'Upcoming' && index === 0) {
                        return <CampaignTableBody {...{row, openPriceModal, openCalendar, date}} />;
                    } else if (campaignType(date) === 'Live' && index === 1) {
                        return <CampaignTableBody {...{row, openPriceModal, openCalendar, date}} />;
                    } else if (campaignType(date) === 'Past' && index === 2) {
                        return <CampaignTableBody {...{row, openPriceModal, openCalendar, date}} />;
                    }
                })}
                </tbody>
            </table>
            {isPriceModalOpen && <PriceModal {...{priceDetailsRow, openPriceModal}}/>}
            {isCalendarOpen && <Calendar value={dateState}
                                         onChange={changeDate}/>}
        </IntlProvider>
    );
}