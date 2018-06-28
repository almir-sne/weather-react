export default function timer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_WEATHER_CARD':
            return {
                ...state,
                weather: action.weather
            };
        case 'FIND_BY_LIST_SUCCESS':
            return {
                ...state,
                cities: action.cities
            };
        case 'CLEAR':
            return {
                ...state,
                weather: undefined
            };
        default:
            return state
    }
}
