import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, switchMap } from 'rxjs';
import { ProfileSearchService } from '../profile-search.service';

import * as ProfileSearchActions from './profile-search.actions';
import { loadProfileSearchSuccess } from './profile-search.actions';
import { ProfileInfo } from './profile-search.models';
import * as ProfileSearchFeature from './profile-search.reducer';

@Injectable()
export class ProfileSearchEffects {
  searchProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileSearchActions.searchProfile),
      switchMap(({searchTerm})=> 
      this.service.getProfileInfo(searchTerm).pipe(map((profile)=> 
         loadProfileSearchSuccess({profile: profile as ProfileInfo})
      )
    ))
  ));

  constructor(private readonly actions$: Actions, private service:ProfileSearchService) {}
}
