import { call, takeEvery } from "redux-saga/effects";
import { loginUser } from "./Auth/authService";
import { setTokenToLocalStorage } from "./Auth/SignIn/action";
import { signIn } from "./authSlice";


function* fetchUserTokenHandler({ payload }) {
    try {
        const response = yield call(loginUser, payload);
        console.log(response)
        yield call(setTokenToLocalStorage, response);
    } catch (error) {
        yield call(alert, "Popsute :/");
    }
}

export default function* authSaga() {
    console.log("saga dziala")
    yield takeEvery(signIn, fetchUserTokenHandler)
};