import {createSlice} from "@reduxjs/toolkit";
import {exampleBrokerData} from "../data/brokers"

type BrokerDataSlice = {
}

const initialState: BrokerDataSlice = {
    value: exampleBrokerData
}

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {},
})

export default brokerDataSlice.reducer