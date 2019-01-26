import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent  implements OnInit{
  title = 'neon-html';
  public chartData: Object [];

public primaryXAxis: Object;

ngOnInit(): void {

// Data for chart series

this.chartData = [

{ year:'2000', gold: 35, silver: 25 }, { year: '2001', gold: 28, silver: 20 },

{ year:'2002', gold: 34, silver: 21 }, { year: '2003', gold: 32, silver: 15 },

{ year:'2004', gold: 40, silver: 30 }

];

this.primaryXAxis = { valueType: 'Category' };

}
}
