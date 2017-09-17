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
    static generatePoints(connectionsObj,capArr) {

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

        // calculate difference to reference
        let pointsArr = [];
        for (let i = 0; i < conObj.length; i++) {

            let capacity = capArr[i];

            let durationMoment = moment(conObj[i].duration.substring(3),"HH:mm:ss");
            let durationMinutes = moment.duration(durationMoment.diff(referenceMoment)).asMinutes();
            let diffDuration = durationMinutes / lowestDuration;

            let transfers = conObj[i].transfers;
            let diffTransfers = transfers / Math.max(1,lowestTransfers);

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
            let diffWaiting = sumWaiting / Math.max(1,lowestWaiting);

            // calculate points
            let points = Math.floor(((diffDuration)+(diffTransfers)+(diffWaiting)+(50*(2-capacity)))*(2-capacity));
            pointsArr.push(points);
        }
        return pointsArr;
    }

}

