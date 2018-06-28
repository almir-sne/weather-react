import {put, all, call, takeLatest} from 'redux-saga/effects'
import {findByWoeid, findByList} from './api'


export function* findByWoeidRequest({woeid}) {
    let response = yield call(findByWoeid, woeid);

    if (response && (response.status === 200)) {
        yield put({
            type: 'LOAD_WEATHER_CARD',
            weather: response.data.query.results.channel
        });
    }
}

export function* findByListRequest({cities}) {
    let response = yield call(findByList, cities);

    if (response && (response.status === 200)) {
        yield put({
            type: 'FIND_BY_LIST_SUCCESS',
            cities: response.data.query.results.channel
        });
    }
}

export function* rootSaga() {
    yield all([
        takeLatest('FIND_BY_WOEID', findByWoeidRequest),
        takeLatest('FIND_BY_LIST', findByListRequest)
    ])
}