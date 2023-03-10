import { configureStore, Reducer, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import showMenu, { showMenuSliceI } from './slices/showMenu';
import common, { commonStateSliceI } from './slices/common';
import location, { locationSliceI } from './slices/location';
import store, { storeSliceI } from './slices/store';

// 리듀서 State 타입 정의
export interface ReducerStates {
  common: commonStateSliceI;
  location: locationSliceI;
  showMenu: showMenuSliceI;
  store: storeSliceI;
}

// 루트 리듀서 생성
const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    // 슬라이스 통합
    default: {
      const combinedReducer = combineReducers({
        common: common.reducer,
        location: location.reducer,
        showMenu: showMenu.reducer,
        store: store.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

// store 생성 함수
const makeStore = () => {
  // 미들웨어 추가 (필요 없으면 생략)
  // const middleware = getDefaultMiddleware();
  // if (process.env.NODE_ENV === 'development') {
  //   middleware.push(logger);
  // }

  // store 생성
  const store = configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>, // 리듀서
    // middleware, // 미들웨어
    // middleware: [...getDefaultMiddleware(), logger]
    // devTools: process.env.NODE_ENV === 'development', // 개발자도구
  });

  // store 반환
  return store;
};

// ### 타입 익스포트
export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
export type AppDispatch = AppStore['dispatch']; // dispatch 타입
// export type RootState = ReturnType<AppStore['getState']>; // RootState 타입(위와 동일함)
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>; // Thunk 를 위한 타입

// ### next-redux-wrapper의 wrapper 생성
const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

// wrapper 익스포트
export default wrapper;
