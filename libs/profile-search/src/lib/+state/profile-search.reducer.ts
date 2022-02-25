import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProfileSearchActions from './profile-search.actions';
import { ProfileInfo, ProfileSearchEntity } from './profile-search.models';

export const PROFILE_SEARCH_FEATURE_KEY = 'profileSearch';

export interface State extends EntityState<ProfileSearchEntity> {
  selectedId?: string | number; // which ProfileSearch record has been selected
  loaded: boolean; // has the ProfileSearch list been loaded
  error?: string | null; // last known error (if any)
  profile:ProfileInfo |null
}

export interface ProfileSearchPartialState {
  readonly [PROFILE_SEARCH_FEATURE_KEY]: State;
}

export const profileSearchAdapter: EntityAdapter<ProfileSearchEntity> =
  createEntityAdapter<ProfileSearchEntity>();

export const initialState: State = profileSearchAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  profile:null,
});

const profileSearchReducer = createReducer(
  initialState,
  on(ProfileSearchActions.searchProfile, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  // on(
  //   ProfileSearchActions.loadProfileSearchSuccess,
  //   (state, { profile }) =>
  //     profileSearchAdapter.setAll(profile, { ...state, loaded: true })
  // ),
  on(
    ProfileSearchActions.loadProfileSearchSuccess,
    (state, { profile }) =>{
      console.log('JSON.stringify',JSON.stringify(profile));
    return ({
      ...state,
      profile,
      loaded: true,
      error: null,
    })}),
  on(ProfileSearchActions.loadProfileSearchFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return profileSearchReducer(state, action);
}
