import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressComponent } from './progress/progress.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceBrandsComponent } from './device-brands/device-brands.component';
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
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
} from '@angular/material';
import { FlashOptionComponent } from './flash-option/flash-option.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    DeviceDetailsComponent ,DeviceBrandsComponent, FlashOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
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
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
