import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter, Subject, takeUntil } from 'rxjs';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit, OnDestroy {
  form:FormGroup;
  
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb:FormBuilder, private profileService: ProfileService) { 
   this.form = fb.group({profileName:['']})
   this.form.valueChanges.pipe(filter(val=>val),debounceTime(600),takeUntil(this.destroy$))
   .subscribe(form=>{
    this.profileService.getProfileInfo(form?.profileName).subscribe(res=>{
      console.log("Response",res)
    })   
   }
   )
  }

  ngOnInit(): void {
  }

  cancel(){
    console.log("called");
    this.form.controls['profileName'].setValue('');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
