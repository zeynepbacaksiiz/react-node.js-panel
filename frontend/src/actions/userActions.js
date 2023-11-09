import * as api from "../axios";

export const fetchMemories = () => async (dispatch) => {
  try {
    const response = await api.signIn();
    dispatch({ type: "AUTH", payload: response });
    if (response.data) {
      localStorage.setItem("kullanici", JSON.stringify(response.data));
    }
  } catch (error) {
    dispatch({
      type: "SIGNIN_FAIL",

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
