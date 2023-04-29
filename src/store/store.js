import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from 'store/dashboardSlice/dashboardSlice';

export const store = configureStore({ reducer: { dashboard: dashboardSlice } });
