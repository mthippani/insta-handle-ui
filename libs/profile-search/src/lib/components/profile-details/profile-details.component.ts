import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSearchFacade } from '../../+state/profile-search.facade';

@Component({
  selector: 'insta-handle-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile$:Observable<any>;
  constructor( private profileFacade: ProfileSearchFacade) { 
    this.profile$= this.profileFacade.profile$
  }
  ngOnInit(): void {
  }

}
