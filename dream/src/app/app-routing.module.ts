import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ApplicationComponent } from './application/application.component';
import { RegistergreetingComponent } from './registergreeting/registergreeting.component';
import { ErrorComponent } from './error/error.component';
import { IncomeComponent } from './income/income.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactUs', component: ContactUSComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'on-register', component: RegistergreetingComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'property', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
