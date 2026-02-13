import {createSlice,configureStore} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name:"auth",
    initialState:{user:"",isLoggedIn:false },
    reducers:{
        login(state){
            state.isLoggedIn=true
        },
        logOut(state){
            state.isLoggedIn=false
        }
    },
})

export const authActions =authSlice.actions;

export const store= configureStore({
    reducer:authSlice.reducer
})

// =====          access initialStates like isLoggedIn     "here in navbar.jsx"=====
// import  useSelector
//   const isLoggedIn= useSelector((state)=> state.isLoggedIn)


// ==================          acces reducers "here in login.jsx" ===========
//import dispatch ,import authActions 
// dispatch(authactions.login())