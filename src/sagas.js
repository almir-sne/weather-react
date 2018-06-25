import {put, all, call, takeLatest} from 'redux-saga/effects'
import {findByWoeid} from './api'


export function* findByWoeidRequest({woeid}) {
    let response = yield call(findByWoeid, woeid);

    if (response && (response.status === 200)) {
        yield put({
            type: 'FIND_BY_WOEID_SUCCESS',
            weather: response.data.query.results.channel
        });
    }
}

export function* rootSaga() {
    yield all([
        takeLatest('FIND_BY_WOEID', findByWoeidRequest)
    ])
}