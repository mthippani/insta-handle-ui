import { createAction, props } from '@ngrx/store';
import { ProfileInfo, ProfileSearchEntity } from './profile-search.models';

export const searchProfile = createAction('[ProfileSearch Page] Profile Searching',
 props<{ searchTerm: string}>()
);

export const loadProfileSearchSuccess = createAction(
  '[ProfileSearch/API] Load ProfileSearch Success',
  props<{ profile: ProfileInfo|null}>()
);

export const loadProfileSearchFailure = createAction(
  '[ProfileSearch/API] Load ProfileSearch Failure',
  props<{ error: any }>()
);
