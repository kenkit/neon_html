import { Component, OnInit } from '@angular/core';

import { Brand} from './device-brands';
import { BRANDS } from './device-brands-mock';
import { WebsocketService } from './../websocket.service';
import {  RecvService } from './../recv.service';
@Component({
  selector: 'app-device-brands',
  templateUrl: './device-brands.component.html',
  styleUrls: ['./device-brands.component.css']
})
export class DeviceBrandsComponent implements OnInit {

  constructor(private recvService: RecvService) { 
    
  }
  private devices_s = {
		author: 'tutorialedge',
    message: 'this is a test message',
    progress_val: 0,
    current_window:2
	}
  ngOnInit() {
  }
  brands = BRANDS;

selectedBrand: Brand;
onSelect(brand: Brand): void {
  this.selectedBrand = brand;
}

/*{"author":"tutorialedge","message":"","progress_val":1,"current_window":1} */
next() {
  console.log('new message from device brands : ', this.devices_s);
  this.recvService.messages.next(this.devices_s);
  this.devices_s.message = 'Received message from brand select';
}
}
