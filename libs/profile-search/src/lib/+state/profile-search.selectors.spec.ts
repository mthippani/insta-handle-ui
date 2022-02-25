import { ProfileSearchEntity } from './profile-search.models';
import {
  profileSearchAdapter,
  ProfileSearchPartialState,
  initialState,
} from './profile-search.reducer';
import * as ProfileSearchSelectors from './profile-search.selectors';

describe('ProfileSearch Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProfileSearchId = (it: ProfileSearchEntity) => it.id;
  const createProfileSearchEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ProfileSearchEntity);

  let state: ProfileSearchPartialState;

  beforeEach(() => {
    state = {
      profileSearch: profileSearchAdapter.setAll(
        [
          createProfileSearchEntity('PRODUCT-AAA'),
          createProfileSearchEntity('PRODUCT-BBB'),
          createProfileSearchEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ProfileSearch Selectors', () => {
    it('getAllProfileSearch() should return the list of ProfileSearch', () => {
      const results = ProfileSearchSelectors.getAllProfileSearch(state);
      const selId = getProfileSearchId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProfileSearchSelectors.getSelected(
        state
      ) as ProfileSearchEntity;
      const selId = getProfileSearchId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getProfileSearchLoaded() should return the current "loaded" status', () => {
      const result = ProfileSearchSelectors.getProfileSearchLoaded(state);

      expect(result).toBe(true);
    });

    it('getProfileSearchError() should return the current "error" state', () => {
      const result = ProfileSearchSelectors.getProfileSearchError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
