import {
  SUCCESS_STATE,
  ERROR_STATE,
  START_STATE,
  SUCCESS_REGION,
  ERROR_REGION,
  START_REGION,
  SUCCESS_SHRINE,
  ERROR_SHRINE,
  START_SHRINE,
} from "./types";

const initialValue = {
  states: [],
  regions: [],
  shrines: [],
  stateItem: "",
  regionItem: "",
  shrineItem: "",
  regionsError: false,
  shrinesError: false,
  regionsLoading: false,
  shrinesLoading: false,
  isError: false,
  loading: false,
};

export const statesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case START_STATE:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_STATE:
      return {
        ...state,
        loading: false,
        isError: false,
        states: action.payload,
      };
    case ERROR_STATE:
      return {
        ...state,
        loading: false,
        isError: true,
        states: [],
      };
    case START_REGION:
      return {
        ...state,
        regionsLoading: true,
      };
    case SUCCESS_REGION:
      return {
        ...state,
        regionsLoading: false,
        regionsError: false,
        regions: action.payload,
      };
    case ERROR_REGION:
      return {
        ...state,
        regionsLoading: false,
        regionsError: true,
        regions: [],
      };

    case START_SHRINE:
      return {
        ...state,
        shrinesLoading: true,
      };
    case SUCCESS_SHRINE:
      return {
        ...state,
        shrinesLoading: false,
        shrinesError: false,
        shrines: action.payload,
      };
    case ERROR_SHRINE:
      return {
        ...state,
        shrinesLoading: false,
        shrinesError: true,
        shrines: [],
      };
    default:
      return state;
  }
};
