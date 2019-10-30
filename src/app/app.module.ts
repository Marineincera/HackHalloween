import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { FormComponent } from './form/form.component';
import { SelectsComponent } from './form/selects/selects.component';
import { PhotoSelectComponent } from './form/photo-select/photo-select.component';
import { ProfileComponent } from './profile/profile.component';
import { SwipeComponent } from './swipe/swipe.component';
import { ProfileSmallComponent } from './profile-small/profile-small.component';
import { MatchComponent } from './swipe/match/match.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    FormComponent,
    SelectsComponent,
    PhotoSelectComponent,
    ProfileComponent,
    SwipeComponent,
    ProfileSmallComponent,
    MatchComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
