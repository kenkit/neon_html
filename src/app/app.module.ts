import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressComponent } from './progress/progress.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTooltipModule,
  MatStepperModule,
  MatInputModule,
  
} from '@angular/material';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceBrandsComponent } from './device-brands/device-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    DeviceDetailsComponent,
    DeviceBrandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxSpinnerModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatTooltipModule,
    MatStepperModule,
    MatInputModule,

    NgbModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatTooltipModule,
    MatStepperModule,
    MatInputModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
