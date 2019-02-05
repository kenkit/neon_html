import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressComponent } from './progress/progress.component';
import { DeviceSelectComponent } from './device-select/device-select.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    DeviceSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, 
    NgbModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
