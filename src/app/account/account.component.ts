import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { WebsocketService } from './../websocket.service';
import {  RecvService } from './../recv.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  show_bitpay = false;
  iframeSrcUrl = "";
  private devices_s = {
		author: 'brands',
    message: '',
    progress_val: 0,
    current_window:10
	}
  yt = '<iframe class="w-100" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  constructor(private reccv:  RecvService) {
    reccv.messages.subscribe(msg => {		
      if (msg.current_window === 10)
      {
        this.show_bitpay = true;
        this.iframeSrcUrl = msg.message;
        this.yt = '<iframe class="w-100" src="'+this.iframeSrcUrl+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      }
   
		});

   }
  user: User = {
    id: 1,
    name: 'Kennedy Cheskaki',
    username: 'kenkit',
    credits: 10,
    email: 'kkituyi@yahoo.com',


  };


  ngOnInit() {
  }
  
  add_bitcoins() {

   this.reccv.messages.next(this.devices_s);
    console.log('Loading iframed: ', this.iframeSrcUrl);
  }

}
