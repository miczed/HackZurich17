import axios from 'axios';
import moment from 'moment';

export default class Data  {
    /**
     *
     * @param from
     * @param to
     * @returns {*|Promise.<T>}
     */
    static handleSearch(from,to) {
        return axios.get('https://transport.opendata.ch/v1/connections?from=' + from + '&to=' + to);
    }


<<<<<<< Updated upstream
    static CapacityToText(cap) {
        if (cap === 0) { return "Few people, great choice!" } else
        if (cap === 1) { return "Capacity is still fine." } else
        if (cap === 2) { return "Train is very crowded." }
    }

    static CapacityToColor(cap) {
        if (cap === 2) { return "#EB5757" } else
        if (cap === 1) { return "#BDBDBD" } else
        if (cap === 0) { return "#27AE60" }
    }
    static CapacityToPoints(cap) {
        return (2-cap) * Math.floor((Math.random() * 100 + 10));
    }
=======
    static generatePoints(connectionsObj, key) {

        let conObj = connectionsObj;

        let lowestDuration = Number.POSITIVE_INFINITY;
        let lowestTransfers = Number.POSITIVE_INFINITY;
        let lowestWaiting = Number.POSITIVE_INFINITY;

        // set lowest values (Reference) -> less points
        let referenceMoment = moment("00:00", "HH:mm");
        for (let i = 0; i < conObj.length; i++) {
            let durationMoment = moment(conObj[i].duration.substring(3),"HH:mm:ss");
            let durationMinutes = moment.duration(durationMoment.diff(referenceMoment)).asMinutes();
            let transfers = conObj[i].transfers;
            let sections = conObj[i].sections;
            let sumWaiting = 0;

            if (sections.length > 1) {
                for (let k = 0; k < sections.length; k++) {
                    if (k !== sections.length - 1) {
                        let departureNext = moment(sections[k+1].departure.departure);
                        let arrival = moment(sections[k].arrival.arrival);
                        sumWaiting += moment.duration(departureNext.diff(arrival)).asMinutes();
                    }
                }
            }
            if (sumWaiting < lowestWaiting) {
                lowestWaiting = sumWaiting;
            }
            if (durationMinutes < lowestDuration) {
                lowestDuration = durationMinutes;
            }
            if (transfers < lowestTransfers) {
                lowestTransfers = transfers;
            }
        }
        console.log("Lowest Duration: " + lowestDuration);
        console.log("Lowest Transfers: " + lowestTransfers);
        console.log("Lowest Waiting: " + lowestWaiting);

        // calculate difference to reference
        let pointsArr = [];
        for (let i = 0; i < conObj.length; i++) {
            let fakeValuesCapacity = [0, 1, 2];
            let capacity = fakeValuesCapacity[Math.floor(Math.random() * fakeValuesCapacity.length)]  /* conObj[i].capacity1st */

            let durationMoment = moment(conObj[i].duration.substring(3),"HH:mm:ss");
            let durationMinutes = moment.duration(durationMoment.diff(referenceMoment)).asMinutes();
            let diffDuration = durationMinutes - lowestDuration;

            let transfers = conObj[i].transfers;
            let diffTransfers = transfers - lowestTransfers;

            let sections = conObj[i].sections;
            let sumWaiting = 0;
            if (sections.length > 1) {
                for (let k = 0; k < sections.length; k++) {
                    if (k !== sections.length - 1) {
                        let departureNext = moment(sections[k+1].departure.departure);
                        let arrival = moment(sections[k].arrival.arrival);
                        sumWaiting += moment.duration(departureNext.diff(arrival)).asMinutes();
                    }
                }
            }
            let diffWaiting = sumWaiting - lowestWaiting;

            // calculate points
            let points = ((3*diffDuration)+(2*diffTransfers)+(6*diffWaiting))*(2-capacity);
            pointsArr.push(points);
        }










        //add points to object
        for (let i = 0; i < conObj.length; i++) {
            console.log("hey");
            conObj[i].points = pointsArr[i];
        }

        console.log(conObj[0].points);



    }

>>>>>>> Stashed changes
}

