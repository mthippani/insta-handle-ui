import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProfileSearch from './+state/profile-search.reducer';
import { ProfileSearchEffects } from './+state/profile-search.effects';
import { ProfileSearchFacade } from './+state/profile-search.facade';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProfileSearchComponent } from './components/profile-search/profile-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Route, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';

export const pageRoutes:Route[]=[{
  path:'instahandle',
  component: ProfileSearchComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    NxModule.forRoot(),
    MatFormFieldModule,
    RouterModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([ProfileSearchEffects]),
    StoreModule.forFeature(
      fromProfileSearch.PROFILE_SEARCH_FEATURE_KEY,
      fromProfileSearch.reducer
    ),
  ],
  providers: [ProfileSearchFacade],
  declarations: [
    ProfileSearchComponent,
    ProfileDetailsComponent
  ],
})
export class ProfileSearchModule {}

