import { CREATE, FETCH_ALL,DELETE,UPDATE } from "../constants/actionsContant";
import * as api from '../axios'

export const fetchMemories = () => async (dispatch) => {
  try {
    const { data } = await api.hakkimda();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const createMemory=(memory)=>async dispatch =>{
  try{
    const {data}=await api.hakkimdaekle(memory);
    dispatch({type:CREATE,payload:data})
  }
  catch (error){
    console.log(error);
  }
}


export const deleteMemory=(id)=>async dispatch =>{
  try{
    await api.hakkimdasil(id);
    dispatch({type:DELETE,payload:id})
  }
  catch (error){
    console.log(error);
  }
}

export const updateMemory=(id,Hakkinda)=>async dispatch =>{
  try{
    const { data } = await api.guncelle(id,Hakkinda);
    dispatch({ type: UPDATE, payload: data });
  }
  catch (error){
    console.log(error);
  }
}