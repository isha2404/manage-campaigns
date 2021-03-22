import moment from 'moment';
import React from 'react';
import {additionalInfo, campaignDurationDiff} from './helper';

export default function CampaignTableBody({row, openPriceModal, openCalendar, date}) {
    const {name, region, image_url} = row;
    const durationDiffFromCurrDate = campaignDurationDiff(date);
    const additionalDateInfo = additionalInfo(durationDiffFromCurrDate);
    const formatDate = date => moment(date).format("MMM YYYY, DD");
    const priceUrl = "img/Price.png";
    const csvUrl = "img/file.png";
    const reportUrl = "img/statistics-report.png";
    const scheduleUrl = "img/calendar.png";

    return (
        <tr key={name}>
            <td className="date">{formatDate(date)}<br/><i>{additionalDateInfo}</i></td>
            <td className="campaign"><img src={image_url} alt="" width="40" height="40"
                                          style={{position: "absolute"}}/>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {name}<br/>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i>{region}</i></td>
            <td className="view"><img src={priceUrl} alt="" width="30" height="30"
                                      style={{position: "absolute"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button class="pricingButton"
                        onClick={() => openPriceModal({isPriceModalOpen: true, rowDetails: row})}>View Pricing
                </button>
            </td>
            <td className="action">
                <img src={csvUrl} alt="" width="28" height="30"
                     style={{position: "absolute"}}/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CSV
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src={reportUrl} alt="" width="28" height="30"
                                                               style={{position: "absolute"}}/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Report
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="scheduleAgain" onClick={() => openCalendar({isCalendarOpen: true, name})}><img src={scheduleUrl} alt=""
                                                                                          width="28" height="30"
                                                                                          style={{position: "absolute"}}/>
                </button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Schedule
                Again
            </td>
        </tr>
    );
}