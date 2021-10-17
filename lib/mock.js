/**
 * Created by michaelziorjen on 17/09/17.
 */

export let mockConnection = {
    capacity1st : null,
    capacity2nd : null,
    alwaysPossible : true,
    duration : "00d00:02:00",
    from :                     {
        arrival : null,
        arrivalTimestamp : null,
        delay : null,
        departure : "2017-09-17T07:40:00+0200",
        departureTimestamp : Math.floor(Date.now() / 1000),
        location :                         {
            coordinate :                             {
                type : "WGS84",
                x : "47.390173",
                y : "8.5150078",
            },
            distance : null,
            id : 8503000,
            name : "Z\U00fcrich HB",
            score : null,
        },
        platform : "43/44",
        prognosis :                         {
            arrival : null,
            capacity1st : null,
            capacity2nd : null,
            departure : null,
            platform : null,
        },
        realtimeAvailability : null,
        station :                         {
            coordinate :                             {
                type : "WGS84",
                x : "47.390173",
                y : "8.5150078",
            },
            distance : null,
            id : 8503000,
            name : "Z\U00fcrich HB",
            score : null,
        },
    },
    products :                     (
        "HCK 17"
    ),
    sections :                     [
        {
            arrival :                             {
                arrival : "2017-09-17T07:42:00+0200",
                arrivalTimestamp : 1505626920,
                delay : null,
                departure : null,
                departureTimestamp : null,
                location :                                 {
                    coordinate :                                     {
                        type : "WGS84",
                        x : "47.366608",
                        y : "8.548465",
                    },
                    distance : null,
                    id : 8503003,
                    name : "Z\U00fcrich Stadelhofen",
                    score : null,
                },
                platform : 3,
                prognosis :                                 {
                    arrival : null,
                    capacity1st : null,
                    capacity2nd : null,
                    departure : null,
                    platform : null,
                },
                realtimeAvailability : null,
                station :                                 {
                    coordinate :                                     {
                        type : "WGS84",
                        x : "47.366608",
                        y : "8.548465",
                    },
                    distance : null,
                    id : 8503003,
                    name : "Z\U00fcrich Stadelhofen",
                    score : null,
                },
            },
            departure :                             {
                arrival : null,
                arrivalTimestamp : null,
                delay : null,
                departure : "2017-09-17T07:40:00+0200",
                departureTimestamp : 1505626800,
                location :                                 {
                    coordinate :                                     {
                        type : "WGS84",
                        x : "47.377847",
                        y : "8.540502",
                    },
                    distance : null,
                    id : 8503000,
                    name : "Z\U00fcrich HB",
                    score : null,
                },
                platform : "43/44",
                prognosis :                                 {
                    arrival : null,
                    capacity1st : null,
                    capacity2nd : null,
                    departure : null,
                    platform : null,
                },
                realtimeAvailability : null,
                station :                                 {
                    coordinate :                                     {
                        type : "WGS84",
                        x : "47.377847",
                        y : "8.540502",
                    },
                    distance : null,
                    id : 8503000,
                    name : "Z\U00fcrich HB",
                    score : null,
                },
            },
            journey :                             {
                capacity1st : null,
                capacity2nd : null,
                category : "S",
                categoryCode : null,
                name : "HCK-TRAIN 17",
                number : 15,
                operator : "SBB",
                passList :                                 (
                    {
                        arrival : null,
                        arrivalTimestamp : null,
                        delay : null,
                        departure : "2017-09-17T07:40:00+0200",
                        departureTimestamp : 1505626800,
                        location :                                         {
                            coordinate :                                             {
                                type : "WGS84",
                                x : "47.377847",
                                y : "8.540502",
                            },
                            distance : null,
                            id : 8503000,
                            name : "Z\U00fcrich HB",
                            score : null,
                        },
                        platform : "43/44",
                        prognosis :                                         {
                            arrival : null,
                            capacity1st : null,
                            capacity2nd : null,
                            departure : null,
                            platform : null,
                        },
                        realtimeAvailability : null,
                        station :                                         {
                            coordinate :                                             {
                                type : "WGS84",
                                x : "47.377847",
                                y : "8.540502",
                            },
                            distance : null,
                            id : 8503000,
                            name : "Z\U00fcrich HB",
                            score : null,
                        },
                    },
                        {
                            arrival : "2017-09-17T07:42:00+0200",
                            arrivalTimestamp : 1505626920,
                            delay : null,
                            departure : null,
                            departureTimestamp : null,
                            location :                                         {
                                coordinate :                                             {
                                    type : "WGS84",
                                    x : "47.366608",
                                    y : "8.548465",
                                },
                                distance : null,
                                id : 8503003,
                                name : "Z\U00fcrich Stadelhofen",
                                score : null,
                            },
                            platform : 3,
                            prognosis :                                         {
                                arrival : null,
                                capacity1st : null,
                                capacity2nd : null,
                                departure : null,
                                platform : null,
                            },
                            realtimeAvailability : null,
                            station :                                         {
                                coordinate :                                             {
                                    type : "WGS84",
                                    x : "47.366608",
                                    y : "8.548465",
                                },
                                distance : null,
                                id : 8503003,
                                name : "Z\U00fcrich Stadelhofen",
                                score : null,
                            },
                        }
                ),
                subcategory : null,
                to : "Rapperswil",
            },
            walk : null,
        }
    ],
    service : null,
    to :                     {
        arrival : "2017-09-17T07:42:00+0200",
        arrivalTimestamp : Math.floor(Date.now() / 1000) + 30 ,
        delay : null,
        departure : null,
        departureTimestamp : null,
        location :                         {
            coordinate :                             {
                type : "WGS84",
                x : "47.366608",
                y : "8.548465",
            },
            distance : null,
            id : 8503003,
            name : "Z\U00fcrich Stadelhofen",
            score : null,
        },
        platform : "43/44",
        prognosis :                         {
            arrival : null,
            capacity1st : null,
            capacity2nd : null,
            departure : null,
            platform : null,
        },
        realtimeAvailability : null,
        station :                         {
            coordinate :                             {
                type : "WGS84",
                x : "47.366608",
                y : "8.548465",
            },
            distance : null,
            id : 8503003,
            name : "Z\U00fcrich Stadelhofen",
            score : null,
        },
    },
    transfers : 0,
};