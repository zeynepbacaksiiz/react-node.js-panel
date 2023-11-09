import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice.js'
import aboutreducer from "../reducers/aboutreducer.js";
import logoreducer from "../reducers/aboutreducer";
import memoriesReducer from "../reducers/memoriesreducer.js";
import skillsReducer from "../reducers/skillsreducer.js";
export const store = configureStore({
    reducer: {
      skilss:skillsReducer,
      memories:memoriesReducer,
      auth:authReducer,
      about:aboutreducer,
      logo:logoreducer,
    },
  });