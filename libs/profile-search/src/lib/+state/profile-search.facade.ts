import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ProfileSearchActions from './profile-search.actions';
import * as ProfileSearchFeature from './profile-search.reducer';
import * as ProfileSearchSelectors from './profile-search.selectors';

@Injectable()
export class ProfileSearchFacade {
  profile$ = this.store.pipe(
    select(ProfileSearchSelectors.getProfile)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  dispatch(action:Action) {
    this.store.dispatch(action);
  }
}
