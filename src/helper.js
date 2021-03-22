import moment from 'moment';

export const campaignRows = [
    {
        "name": "Auto Chess",
        "region": "US",
        "createdOn": 1616807714999,
        "price": {
            "week_price": "$100",
            "month_price": "$500",
            "year_price": "$900"
        },
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url": "img/bitmaps/Bitmap1.png"
    },
    {
        "name": "Super Jewels Quest",
        "region": "CA, FR",
        "createdOn": 1615334400000,
        "price": {
            "week_price": "$200",
            "month_price": "$400",
            "year_price": "$900"
        },
        "csv": "Some CSV link for Super Jewels Quest",
        "report": "Some report link for Super Jewels Ques",
        "image_url": "img/bitmaps/Bitmap2.png"
    },
    {
        "name": "Flow Free",
        "region": "FR",
        "createdOn": 1615680000000,
        "price": {
            "week_price": "$100",
            "month_price": "$400",
            "year_price": "$800"
        },
        "csv": "Some CSV link for Mole Slayer",
        "report": "Some report link for Mole Slayer",
        "image_url": "img/bitmaps/Bitmap3.png"
    },
    {
        "name": "Mancala Mix",
        "region": "JP",
        "createdOn": 1616049732999,
        "price": {
            "week_price": "$100",
            "month_price": "$400",
            "year_price": "$700"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url": "img/bitmaps/Bitmap4.png"
    },
    {
        "name": "PUBG Mobile",
        "region": "JP",
        "createdOn": 1616112000000,
        "price": {
            "week_price": "$200",
            "month_price": "$400",
            "year_price": "$700"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url": "img/bitmaps/Bitmap5.png"
    },
    {
        "name": "Shadow Flight 3",
        "region": "JP",
        "createdOn": 1616284800000,
        "price": {
            "week_price": "$100",
            "month_price": "$300",
            "year_price": "$600"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url": "img/bitmaps/Bitmap6.png"
    },
    {
        "name": "Mole Slayer",
        "region": "JP",
        "createdOn": 1616630400000,
        "price": {
            "week_price": "$200",
            "month_price": "$500",
            "year_price": "$1000"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url": "img/bitmaps/Bitmap7.png"
    },
    {
        "name": "Summoners War",
        "region": "JP",
        "createdOn": 1616630400001,
        "price": {
            "week_price": "$200",
            "month_price": "$600",
            "year_price": "$900"
        },
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url": "img/bitmaps/Bitmap8.png"
    }

];

export const campaignType = (createdDate) => {
    const daysDiffFromCurrDate = campaignDurationDiff(createdDate).days();
    switch (true) {
        case (daysDiffFromCurrDate > 0):
            return 'Upcoming';
        case (daysDiffFromCurrDate === 0):
            return 'Live';
        case (daysDiffFromCurrDate < 0):
            return 'Past';
        default:
            return 'Invalid';
    }
};

export const campaignDurationDiff = (date) => {
    const campaignDate = moment(date);
    const diff = campaignDate.diff(moment());
    return moment.duration(diff);
};

export const additionalInfo = (durationDiffFromCurrDate) => {
    if (durationDiffFromCurrDate > 0) {
        return `${durationDiffFromCurrDate.days()} days ahead`;
    }
    else if (durationDiffFromCurrDate < 0) {
        return `${Math.abs(durationDiffFromCurrDate.days())} days ago`;
    }
    return '';
};