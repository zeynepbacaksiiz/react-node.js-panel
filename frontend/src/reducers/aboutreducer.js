import { FETCH_ALL,CREATE,DELETE,UPDATE} from "../constants/actionsContant";

export default (about=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload

            case CREATE:
                return  [...about,action.payload] 

                case DELETE:
                    return  about.filter((memory)=>memory._id !==action.payload)

                    case UPDATE:
                        return  about.map((memory)=>
                        memory._id === action.payload._id ? action.payload : memory
                        )
            default:
                return about
    }
}