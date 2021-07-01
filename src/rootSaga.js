import { all } from "redux-saga/effects";
import authSaga from "./hooks/authorization/authSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
    ])
}