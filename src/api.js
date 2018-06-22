import axios from "axios";

const request = (query) => {
    return axios.get('https://query.yahooapis.com/v1/public/yql', {params: {q: query, format: "json"}})
};

export const search = (str) => {
    return request("select name, country.code, woeid from geo.places where text = '*" + str + "*'")
};

export const findByWoeid= (woeid) => {
    return request("select * from weather.forecast where woeid = " + woeid)
}
