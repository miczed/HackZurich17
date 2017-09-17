
export default class Geo {

    static THRESHOLD_KM = 1; // amount of KM

    /**
     * Checks if a user is close to the coordinates
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns {boolean}
     */
    static isCloseToPlace(lat1,lon1,lat2,lon2) {
        let distance = this.calcDistance(lat1,lon1,lat2,lon2);
        return  distance <= this.THRESHOLD_KM;
    }

    /**
     * takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns {number}
     */
    static calcDistance(lat1, lon1, lat2, lon2) {
        let R = 6371; // km
        let dLat = this.toRad(lat2-lat1);
        let dLon = this.toRad(lon2-lon1);
        lat1 = this.toRad(lat1);
        lat2 = this.toRad(lat2);

        let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    /**
     * Converts numeric degrees to radians
     * @param Value
     * @returns {number}
     */
    static toRad(Value) {
        return Value * Math.PI / 180;
    }

    static getUserLocation(success,error) {
        navigator.geolocation.getCurrentPosition(success, error);
    }


}