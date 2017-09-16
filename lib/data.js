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

}

