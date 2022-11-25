import {createSlice} from "@reduxjs/toolkit";
import {exampleBrokerData} from "../data/brokers"

const initialState = {
    exampleBrokerData
}

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {},
})

export default brokerDataSlice.reducer