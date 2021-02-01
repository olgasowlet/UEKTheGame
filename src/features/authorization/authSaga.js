import { call, throttle, put, takeEvery, select } from "redux-saga/effects";
import { setTokenToLocalStorage } from "./Auth/SignIn/action";

function* setTokenToLocalStorageHandler() {
    try {
        const token = yield select(selectToken);
        yield call(saveTokenToLocalStorage, body);
    } catch (error) {
        yield call(alert, "Popsute :/");
    };
};

export default function* tasksSaga() {
    yield takeEvery("*", setTokenToLocalStorageHandler);
};