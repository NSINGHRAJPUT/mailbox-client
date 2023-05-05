import { createSlice } from "@reduxjs/toolkit"


const initialAuthState = {isLogged : false, userEmail : localStorage.getItem('userEmail'), token : localStorage.getItem('token'), profileName : null , url : null, email : null, isVerified : false }
const authSlice = createSlice({
    name: 'authentication',
    initialState : initialAuthState,
    reducers : {
        login(state,action){
            state.token = action.payload.idToken;
            state.profileName = action.payload.displayName;
            state.url = action.payload.profilePicture;
            state.email = action.payload.email;
            localStorage.setItem('token',action.payload.idToken)
            localStorage.setItem('userEmail', action.payload.email)
        },
        logout(state){
            state.token = null;
            state.profileName = null;
            state.url = null;
            state.email = null;
            state.isVerified = false;
            localStorage.clear();
        },
        switchHandler(state){
            state.isLogged = ! state.isLogged
        }
    }
})
export const authActions = authSlice.actions
export default authSlice.reducer;