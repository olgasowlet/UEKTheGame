import { all } from "redux-saga/effects";
import authSaga from "./features/authorization/authSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
    ])
}