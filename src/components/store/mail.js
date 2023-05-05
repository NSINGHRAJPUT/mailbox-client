import { createSlice } from "@reduxjs/toolkit"


const initialMailState = { mails:[]}

const mailSlice = createSlice({
    name : 'Mails',
    initialState : initialMailState,
    reducers : {
        
    }
})

export const mailsActions = mailSlice.actions
export default mailSlice.reducer