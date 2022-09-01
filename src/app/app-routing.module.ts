import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { PipedemoComponent } from './Component/pipedemo/pipedemo.component';
import { UserFormComponent } from './Component/user-form/user-form.component';

const routes: Routes = [{path:'userform',component:UserFormComponent}, {path:'about',component:AboutComponent}
,{path:'pipe',component:PipedemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
