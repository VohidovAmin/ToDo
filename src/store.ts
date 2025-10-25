import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import themeReducer from './features/ThemeList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'


const rootReducer = combineReducers({
  todoList: todoReducer,
  themeList: themeReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage() || undefined,
})


store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
