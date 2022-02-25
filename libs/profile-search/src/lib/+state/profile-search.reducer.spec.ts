import { Action } from '@ngrx/store';

import * as ProfileSearchActions from './profile-search.actions';
import { ProfileInfo, ProfileSearchEntity } from './profile-search.models';
import { State, initialState, reducer } from './profile-search.reducer';

describe('ProfileSearch Reducer', () => {
  const createProfileSearchEntity = (
    id: string,
    name = ''
  ): ProfileSearchEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ProfileSearch actions', () => {
    it('loadProfileSearchSuccess should return the list of known ProfileSearch', () => {
      const profile = { "dateAndTime": "2022-02-25T03:02:30.557Z", "biography": "The curious hustlers powering the leading all-in-one #influencermarketing platform.", "fullName": "Sample", "followersCount": 2252, "post": { "url": "https://www.instagram.com/p/CLs-IAeIMD0O/?__a=1", "mediaURL": "https://www.facebook.com/", "numberOfLikes": 225, "numberOfComments": 100, "type": "carousel" } } as unknown as ProfileInfo
      const action = ProfileSearchActions.loadProfileSearchSuccess({profile});

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
