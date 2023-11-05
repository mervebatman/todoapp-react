import {
  localizationReducer,
  localizationReducerName,
} from 'redux/slices/app/localizationSlice';
import {
  pokemonApiReducer,
  pokemonApiReducerName,
} from 'redux/slices/pokemon/pokemon';
import {
  signUpApiReducer,
  signUpApiReducerName,
} from 'redux/slices/signUp/SignUpApi';
import {
  signUpReducer,
  signUpReducerName,
} from 'redux/slices/signUp/signUpSlice';
import { userReducer, userReducerName } from 'redux/slices/user/userSlice';

import { TodoApiReducer, todoApiReducerName } from './slices/todo/todoApi';
import { todoReducer, todoReducerName } from './slices/todo/todoSlices';

const rootReducer = {
  [userReducerName]: userReducer,
  [pokemonApiReducerName]: pokemonApiReducer,
  [localizationReducerName]: localizationReducer,
  [signUpReducerName]: signUpReducer,
  [signUpApiReducerName]: signUpApiReducer,
  [todoReducerName]: todoReducer,
  [todoApiReducerName]: TodoApiReducer,
};

export default rootReducer;
