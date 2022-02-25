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
    it('getProfile() should return the selected Entity', () => {
      const result = ProfileSearchSelectors.getProfile(
        state
      );
      expect(result).not.toBeNull();
    });
  });
});
