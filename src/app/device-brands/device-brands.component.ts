import { Component, OnInit } from '@angular/core';
import { BRANDS} from './device-brands-mock';
@Component({
  selector: 'app-device-brands',
  templateUrl: './device-brands.component.html',
  styleUrls: ['./device-brands.component.css']
})
export class DeviceBrandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  brands = BRANDS;

}
