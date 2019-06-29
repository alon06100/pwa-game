import { ActionType } from '../actions/constants';

const initialState = {
  dataLoaded: false,
};

const Moment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOMENT:
      return {
        ...state,
        details: action.card.details,
        assets: action.card.assets,
        metrics: action.card.metrics,
        eventData: action.card.eventData,
        digitalRepresentation: action.card.digitalRepresentation,
        metadata: action.card.metadata,
        dataLoaded: true,
      };
    case ActionType.SET_RELATED_COMPETITOR:
      return {
        ...state,
        relatedCompetitor: action.relatedCompetitor,
      };
    default:
      return { ...state };
  }
};

export default Moment;
