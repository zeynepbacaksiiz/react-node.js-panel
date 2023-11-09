
const girisReducer=(state=false,action)=>{
    switch (action.type) {
        case 'SIGN_IN'://ise state true olsun
            return !state;
        default:
            return state;
    }
}

export default girisReducer
