import { Component, OnInit } from '@angular/core';
import { Device } from './device-details';
import {BRANDS} from '../device-brands/device-brands-mock'
import { WebsocketService } from './../websocket.service';
import {  RecvService } from './../recv.service';
@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  private devices_s = {
		author: 'tutorialedge',
    message: 'this is a test message',
    progress_val: 0,
    current_window:3
  }
  
  constructor(private recvService: RecvService) { }

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
  
/*{"author":"tutorialedge","message":"","progress_val":1,"current_window":1} */
next() {
  console.log('new message from device brands : ', this.devices_s);
  this.recvService.messages.next(this.devices_s);
  this.devices_s.message = 'Received message from brand select';
}
}
