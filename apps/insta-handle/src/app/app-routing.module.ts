import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageRoutes } from '@insta-handle/profile-search';

@NgModule({
  imports: [RouterModule.forRoot([...pageRoutes],{
    initialNavigation:'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
