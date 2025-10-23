import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'
import type { TodoState } from './features/todoList'

interface PreloadedState {
  todoList: TodoState
}

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
  preloadedState: loadFromLocalStorage() as PreloadedState,
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
