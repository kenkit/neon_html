import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WebsocketService } from './websocket.service';
import {  RecvService } from './recv.service';
import { Observable } from 'rxjs';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, RecvService  ]
  
})
export class AppComponent {
  title = 'Neon';
  progress: Observable<number>;

  setprogress(val){
     return new Observable<number>(observer => {
      observer.next(val);
    });
    }

  constructor(private recvService: RecvService) {
		recvService.messages.subscribe(msg => {			
      console.log("Response from websocket: " + msg);
      this.progress =this.setprogress(msg.progress_val);
		});
   
	}



  private message = {
		author: 'tutorialedge',
    message: 'this is a test message',
    progress_val:0
	}

  sendMsg() {
		console.log('new message from client to websocket: ', this.message);
		this.recvService.messages.next(this.message);
		this.message.message = '';

  }

}
