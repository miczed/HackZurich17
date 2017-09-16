import axios from 'axios';


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
    static CapacityToPoints(cap) {
        return (2-cap) * Math.floor((Math.random() * 100 + 10));
    }
}

