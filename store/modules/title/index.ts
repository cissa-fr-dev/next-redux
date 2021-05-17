import { Action } from 'redux';
import { TitleType } from './types';

const CHANGE_TITLE = 'title/changeTitle';

interface ChangeTitleAction extends Action<typeof CHANGE_TITLE> {
  payload: TitleType;
}

export const change_title = (title: TitleType): ChangeTitleAction => ({
  type: CHANGE_TITLE,
  payload: title,
});

const initialState: TitleType = {
  title: 'texto inicial',
};

const titleReducer = (
  state: TitleType = initialState,
  action: ChangeTitleAction
): TitleType => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

export default titleReducer;
