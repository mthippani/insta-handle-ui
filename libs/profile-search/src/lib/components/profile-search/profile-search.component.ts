

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter, Observable, Subject, takeUntil } from 'rxjs';
import { searchProfile } from '../../+state/profile-search.actions';
import { ProfileSearchFacade } from '../../+state/profile-search.facade';
import { ProfileSearchService } from '../../profile-search.service';

@Component({
  selector: 'insta-handle-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit, OnDestroy {
  form:FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb:FormBuilder, private profileFacade: ProfileSearchFacade) { 
   this.form = fb.group({profileName:['']})
   this.form.valueChanges.pipe(filter(val=>val),debounceTime(600),takeUntil(this.destroy$))
   .subscribe(form=>{
     console.log("Form",form)
     this.profileFacade.dispatch(searchProfile({searchTerm:form.profileName}));
    // this.profileService.getProfileInfo(form?.profileName).subscribe(res=>{
    //   console.log("Response",form?.profileName,res)
    // })   
   }
   )
  }

  ngOnInit(): void {
  }

  cancel(){
    this.form.controls['profileName'].setValue('');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

