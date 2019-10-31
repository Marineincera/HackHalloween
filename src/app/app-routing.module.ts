import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectsComponent } from './form/selects/selects.component';
import { PhotoSelectComponent } from './form/photo-select/photo-select.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'selects', component: SelectsComponent
  },
  {
    path: 'photoSelects', component: PhotoSelectComponent
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
