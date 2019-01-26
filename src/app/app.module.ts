import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from '@syncfusion/ej2-ng-charts';
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-ng-charts';
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, ChartModule,
    NgbModule.forRoot()
  ],
  providers: [CategoryService, ColumnSeriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
