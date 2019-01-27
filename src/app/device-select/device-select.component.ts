import { Component, OnInit } from '@angular/core';
export interface Brand {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-device-select',
  templateUrl: './device-select.component.html',
  styleUrls: ['./device-select.component.css']
})
export class DeviceSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  brands: Brand[] = [
    {value: 0, viewValue: 'Techno'},
    {value: 1, viewValue: 'Itel'},
    {value: 2, viewValue: 'Infinix'}
  ];

}
