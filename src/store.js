import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import authReducer from "./features/authorization/authSlice";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;