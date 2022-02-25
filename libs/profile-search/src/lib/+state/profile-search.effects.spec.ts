import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ProfileSearchActions from './profile-search.actions';
import { ProfileSearchEffects } from './profile-search.effects';

describe('ProfileSearchEffects', () => {
  let actions: Observable<Action>;
  let effects: ProfileSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProfileSearchEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProfileSearchEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProfileSearchActions.init() });

      const expected = hot('-a-|', {
        a: ProfileSearchActions.loadProfileSearchSuccess({ profileSearch: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
