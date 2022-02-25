import { Action } from '@ngrx/store';

import * as ProfileSearchActions from './profile-search.actions';
import { ProfileSearchEntity } from './profile-search.models';
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
      const profileSearch = [
        createProfileSearchEntity('PRODUCT-AAA'),
        createProfileSearchEntity('PRODUCT-zzz'),
      ];
      const action = ProfileSearchActions.loadProfileSearchSuccess({
        profileSearch,
      });

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
