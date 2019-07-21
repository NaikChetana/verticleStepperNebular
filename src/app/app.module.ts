import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { DemoStepsComponent } from './components/layout/demo-steps/demo-steps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule,
   NbLayoutModule,
   NbCardModule,
   NbButtonModule,
   NbStepperModule,
   } from '@nebular/theme';
import { StartComponent } from './components/steps/start/start.component';
import { EndComponent } from './components/steps/end/end.component';
import { UniversityComponent } from './components/steps/university/university.component';
import { DriversLicenseComponent } from './components/steps/drivers-license/drivers-license.component';
import { CarInsuranceComponent } from './components/steps/car-insurance/car-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    DemoStepsComponent,
    StartComponent,
    EndComponent,
    UniversityComponent,
    DriversLicenseComponent,
    CarInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
