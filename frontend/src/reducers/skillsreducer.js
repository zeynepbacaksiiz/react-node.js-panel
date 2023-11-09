import { FETCH_ALL,CREATE,DELETE,UPDATE} from "../constants/actionsContant";

export default (skilss=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload

            case CREATE:
                return  [...skilss,action.payload] 

                case DELETE:
                    return  skilss.filter((memory)=>memory._id !==action.payload)

                    case UPDATE:
                        return  skilss.map((memory)=>
                        memory._id === action.payload._id ? action.payload : memory
                        )
            default:
                return skilss
    }
}