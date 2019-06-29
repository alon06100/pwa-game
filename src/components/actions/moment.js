import { ApiActions, ActionType } from './constants';

export const loadMoment = card => ({
  type: ActionType.LOAD_MOMENT,
  card,
});

export const setRelatedCompetitor = relatedCompetitor => ({
  type: ActionType.SET_RELATED_COMPETITOR,
  relatedCompetitor,
});
