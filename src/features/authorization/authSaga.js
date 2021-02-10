import { call, select, takeEvery } from "redux-saga/effects";
import { logout } from "./Auth/authService";
import { setTokenToLocalStorage } from "./Auth/fetchToken";
import { selectToken, addToken, removeToken } from "./authSlice";


function* addUserTokenHandler() {
    try {
        const token = yield select(selectToken);
        yield call(setTokenToLocalStorage, token);
    } catch (error) {
        yield call(alert, "Popsute :/");
    }
};

function* removeTokenFromLocalStorageHandler() {
    try {
        yield call(logout)
    } catch (error) {
        yield call(alert, "Popsute :/");
    }
}

export default function* authSaga() {
    yield takeEvery(addToken, addUserTokenHandler);
    yield takeEvery(removeToken, removeTokenFromLocalStorageHandler)
};