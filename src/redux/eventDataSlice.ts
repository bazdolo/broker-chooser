import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import App from "next/app";
import { sendEvent, MeasurementId } from "../logic/event";
import { AppState } from "./store";

export type InitialStateTypes = {
  events: Event[];
};

export type Event = {
  type: "click" | "impression";
  brokerId: number;
  measurementId: MeasurementId;
};

const initialState: InitialStateTypes = {
  events: [],
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const addEvent = createAsyncThunk<Event, Event, { state: AppState }>(
  "event/addEvent",
  (newEvent, getState) => {
    let shouldEventSend = true;
    getState.getState().eventData.events.forEach((event) => {
      if (
        event.type === newEvent.type &&
        event.brokerId === newEvent.brokerId &&
        event.measurementId === newEvent.measurementId
      ) {
        shouldEventSend = false;
      }
    });
    return new Promise<Event>((resolve, reject) => {
      if (shouldEventSend) resolve(newEvent);
      else reject();
    });
  }
);

export const eventDataSlice = createSlice({
  name: "eventData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEvent.fulfilled, (state, { payload }) => {
      state.events.push(payload);
    });
  },
});

export default eventDataSlice.reducer;
