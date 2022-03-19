import { EDIT, ADD_HOBBY } from "../constant";

interface EditAction {
  type: typeof EDIT;
  payload: Partial<{
    name: string;
    age: number;
    sex: string;
  }>;
}
interface AddHobbyAction {
  type: typeof ADD_HOBBY;
  payload: string[];
}

export const createEditAction: (payload: EditAction["payload"]) => EditAction =
  (payload) => ({
    type: EDIT,
    payload,
  });

export const createAddHobbyAction: (
  payload: AddHobbyAction["payload"]
) => AddHobbyAction = (payload) => ({ type: ADD_HOBBY, payload });

export const userReducer = (
  state = {
    name: "cpp",
    age: 2,
    sex: "male",
    hobbies: ["code", "game"],
  },
  action: EditAction | AddHobbyAction
) => {
  switch (action.type) {
    case EDIT:
      return { ...state, ...action.payload };
    case ADD_HOBBY:
      return { ...state, hobbies: [...state.hobbies, ...action.payload] };
    default:
      return state;
  }
};
