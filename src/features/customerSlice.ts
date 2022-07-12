import { createSlice, PayloadAction } from '@reduxjs/toolkit' 



// difining the type......it's totally typescript thing
interface CustomerState{
    value: Customer[]
}

interface Customer {
    id: string,
    name: string,
    food : string[]
}

const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice ({
    name:'customers',
    initialState,
    reducers : {
        addCustomer:(state,action: PayloadAction<Customer>)=>{
            state.value.push(action.payload)
        }
    }
})


export const { addCustomer } = customerSlice.actions

export default customerSlice.reducer