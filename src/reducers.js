export default function timer(state = {}, action) {
    switch (action.type) {
        case 'FIND_BY_WOEID_SUCCESS':
            return {
                ...state,
                weather: action.weather
            };
        default:
            return state
    }
}
