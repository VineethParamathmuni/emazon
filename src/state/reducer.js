import {createSlice} from '@reduxjs/toolkit'

const imagesSlice = createSlice({
    name : 'image',
    initialState : {
        images : [],
    },
    reducers : {
        addToImages : (state, action) => {
            if(!state.images.includes(...action.payload)){
                state.images.push(...action.payload)                         
            }                    
        }
    }
})

const emazSlice = createSlice({
    name : 'emaz',
    initialState : {
        products : [],              
    },
    reducers : {
        addToList : (state, action) => {
            if(!state.products.includes(...action.payload)){
                state.products.push(...action.payload) 
            }            
        }
    }
})

export const {addToImages} = imagesSlice.actions;
export const {addToList} = emazSlice.actions;
export const imagesReducer = imagesSlice.reducer;
export const emazReducer = emazSlice.reducer;