import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectsComponent } from './form/selects/selects.component';
import { PhotoSelectComponent } from './form/photo-select/photo-select.component';


const routes: Routes = [
  {
    path: 'selects', component: SelectsComponent
  },
  {
    path: 'photo-select', component: PhotoSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
