import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectsComponent } from './form/selects/selects.component';
import { PhotoSelectComponent } from './form/photo-select/photo-select.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: 'selects', component: SelectsComponent
  },
  {
    path: 'photo-select', component: PhotoSelectComponent
  },
  {
    path: 'form', component: FormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
