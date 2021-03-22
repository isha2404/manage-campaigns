import React from 'react';

export default function PriceModal({priceDetailsRow, openPriceModal}) {
    const {price: {week_price, month_price, year_price}, region, image_url, name} = priceDetailsRow;
    return (
        <div className="modal" id="modal">
            <img src={image_url} alt="" width="60" height="65" style={{position: "absolute"}}/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {name}<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i>{region}</i>
            <h2>Pricing</h2>
            <div className="content">1 Week - 1 Month &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <b>{week_price}</b></div>
            <div className="content">6 Months  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                 &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;     &nbsp;  <b>{month_price}</b></div>
            <div className="content">1 Year &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; <b>{year_price}</b></div>
            <div className="actions">
                <button className="toggle-button"
                        onClick={() => openPriceModal({isPriceModalOpen: false, rowDetails: {}})}>Close
                </button>
            </div>
        </div>
    );
}