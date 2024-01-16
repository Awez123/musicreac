import {configureStore} from "@reduxjs/toolkit";
import topChartsSlice from "./reducers/subRed";

const store = configureStore({
    reducer:{
        topCharts:topChartsSlice,
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;