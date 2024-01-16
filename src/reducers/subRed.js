import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


export const fetchTopCharts = createAsyncThunk('fetchTopCharts',async ()=>{
    
    // const resp = 
    await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0',{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2716931fb1msh5693952f1b6a041p189cb2jsnf87ec135eaba',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    }).then(response => response.json()).then(json => {
        console.log("jsonnn",json)
        return json.tracks;
    }).catch(e => {
        console.log("e",e)
    });
    // return resp.json();
        
})
const topChartsSlice = createSlice({
    name:"topCharts",
    initialState:{
        isLoading:false,
        data:null,
        error:false,
    },
    extraReducers:(builder) => {
        builder.addCase(fetchTopCharts.fulfilled,(state,action) => {
            state.isLoading=false;
            state.data=action.payload;
            console.log("action",action.payload);
        });
    //     builder.addCase(fetchTopCharts.pending,(state,action) => {
    //         state.isLoading=true;
    //     });
    //     builder.addCase(fetchTopCharts.error,(state,action) =>{
    //         state.error = true;
    //     });
    }
});

export default topChartsSlice.reducer;