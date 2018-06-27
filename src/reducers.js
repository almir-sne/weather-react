export default function timer(state = {}, action) {
    switch (action.type) {
        case 'FIND_BY_WOEID_SUCCESS':
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
            return {};
        default:
            return state
    }
}
