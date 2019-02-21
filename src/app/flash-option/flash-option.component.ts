import { Component, ViewChild, OnInit } from '@angular/core';
import { flash_option } from './flash_option';
import { FLASHOPTIONS } from './flash-option-mock';
import { WebsocketService } from './../websocket.service';
import { RecvService } from './../recv.service';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSelectionList, MatSelectionListChange, MatListOption }  from '@angular/material';
@Component({
  selector: 'app-flash-options',
  templateUrl: './flash-option.component.html',
  styleUrls: ['./flash-option.component.css']
})


export class FlashOptionComponent implements OnInit {
  @ViewChild(MatSelectionList) option: MatSelectionList;
  flash_options = FLASHOPTIONS;

  private devices_s = {
    author: 'brands',
    message: '',
    progress_val: 0,
    current_window: 4,
  };
  constructor(private recvService: RecvService) { }
  selectedOption: flash_option;

  ngOnInit() {

  }
  onChange(event) {
  
    this.selectedOption = this.flash_options[event.source.value - 1];
    console.log(this.selectedOption);
  }

  next() {
    console.log('new message from flash_options : ', this.devices_s);
    this.recvService.messages.next(this.devices_s);
    this.devices_s.message = ''/**JSON.stringify(this.selectedBrand) */;
  }

}
