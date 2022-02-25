import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PROFILE_SEARCH_FEATURE_KEY,
  State,
  profileSearchAdapter,
} from './profile-search.reducer';

// Lookup the 'ProfileSearch' feature state managed by NgRx
export const getProfileSearchState = createFeatureSelector<State>(
  PROFILE_SEARCH_FEATURE_KEY
);

const { selectAll, selectEntities } = profileSearchAdapter.getSelectors();

export const getProfileSearchLoaded = createSelector(
  getProfileSearchState,
  (state: State) => state.loaded
);

export const getProfileSearchError = createSelector(
  getProfileSearchState,
  (state: State) => state.error
);

export const getAllProfileSearch = createSelector(
  getProfileSearchState,
  (state: State) => selectAll(state)
);

export const getProfileSearchEntities = createSelector(
  getProfileSearchState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProfileSearchState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getProfileSearchEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const getProfile = createSelector(
  getProfileSearchState,
  (state: State) => state.profile
);