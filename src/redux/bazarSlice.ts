import { createSlice } from "@reduxjs/toolkit";

// تحديد نوع بيانات المنتج
interface Product {
  _id: number;
  name: string;
  price: number;
  quantity:number;
}

// تحديد نوع الحالة الأولية (Initial State)
interface BazarState {
  productData: Product[];
  userInfo: string | null; 
}

const initialState: BazarState = {
  productData: [],
  userInfo: null,
};

// إنشاء Slice باستخدام TypeScript
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
  },
});

// تصدير الأكشن والـ Reducer
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