import {configureStore} from '@reduxjs/toolkit'
import {imagesReducer, emazReducer} from './reducer'

export const store = configureStore({
    reducer : {
        image : imagesReducer,
        emaz : emazReducer
    }
})