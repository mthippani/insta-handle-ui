import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as ProfileSearchActions from './profile-search.actions';
import { ProfileSearchEffects } from './profile-search.effects';
import { ProfileSearchFacade } from './profile-search.facade';
import { ProfileSearchEntity } from './profile-search.models';
import {
  PROFILE_SEARCH_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './profile-search.reducer';
import * as ProfileSearchSelectors from './profile-search.selectors';

interface TestSchema {
  profileSearch: State;
}

describe('ProfileSearchFacade', () => {
  let facade: ProfileSearchFacade;
  let store: Store<TestSchema>;
  const createProfileSearchEntity = (
    id: string,
    name = ''
  ): ProfileSearchEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PROFILE_SEARCH_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ProfileSearchEffects]),
        ],
        providers: [ProfileSearchFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ProfileSearchFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allProfileSearch$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allProfileSearch$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadProfileSearchSuccess` to manually update list
     */
    it('allProfileSearch$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allProfileSearch$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ProfileSearchActions.loadProfileSearchSuccess({
          profileSearch: [
            createProfileSearchEntity('AAA'),
            createProfileSearchEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allProfileSearch$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
