 const reducer = (intialState = 0 , action) => {
    if(action.type === "deposite"){
        return intialState + action.payload
    }
    else if(action.type === "withdraw"){
        return intialState - action.payload
    }
    else{
        return intialState;
    }

}

export default reducer;