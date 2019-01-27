import { Component, OnInit } from '@angular/core';
import { Device } from './device-details';
import {BRANDS} from '../device-brands/device-brands-mock'

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   devices: Device[] = [
    { id: 1,
      model: 'X557',
      brand:BRANDS[1] },
    { id: 2,
      model: 'X606',
      brand:BRANDS[3]},
    { id: 3,
      model: 'N5S',
      brand:BRANDS[1] },
    {id: 4,
      model: 'X551',
      brand:BRANDS[3]},
    
  ];
}
