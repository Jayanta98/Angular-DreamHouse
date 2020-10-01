import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ApplicationComponent } from './application/application.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    TrackerComponent,
    FaqComponent,
    ContactUSComponent,
    ApplicationComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
