import { call, select, takeEvery } from "redux-saga/effects";
import { loginUser } from "./Auth/authService";
import { setTokenToLocalStorage } from "./Auth/SignIn/action";
import { selectToken, signIn } from "./authSlice";


function* fetchUserTokenHandler() {
    try {
        const token = yield select(selectToken);
        console.log(token)
        yield call(setTokenToLocalStorage, token);
    } catch (error) {
        yield call(alert, "Popsute :/");
    }
}

export default function* authSaga() {
    console.log("saga dziala")
    yield takeEvery(signIn, fetchUserTokenHandler)
};