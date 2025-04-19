import { createSlice } from "@reduxjs/toolkit";

interface Product {
  _id: number;
  name: string;
  price: number;
  quantity:number;
}interface BazarState {
  productData: Product[];
  userInfo: string | null; 
}const initialState: BazarState = {
  productData: [],
  userInfo: null,
};

//    REDUX   createSlice   
export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item)=>item._id ===  action.payload._id) 
      if(item) {
        item.quantity += action.payload.quantity
      }else{
        state.productData.push(action.payload)
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});
 // EXPORTING THE ACTIONS AND REDUCER
export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     productData: [],
//     userInfo: null,
//   };
  
//   export const bazarSlice = createSlice({
//     name: "bazar",
//     initialState,
//     reducers: {
//       addToCart: (state, action) => {
//         state.productData =action.payload
//       }
//     }
//     })

//     export const {addToCart} = bazarSlice.actions;
      
//       export default bazarSlice.reducer;