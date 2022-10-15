import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./slices/mainSlice";
import { notionApi } from "./services/notionApi";

export const store = configureStore({
  reducer: {
    [notionApi.reducerPath]: notionApi.reducer,
    main: mainSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(notionApi.middleware)
});
