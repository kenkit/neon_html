import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WebsocketService } from './websocket.service';
import {  RecvService } from './recv.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, RecvService  ]
  
})
export class AppComponent implements OnInit {
  title = 'Neon';
  progress: Observable<number>;
  show_progress = false;
  setprogress(val){
     return new Observable<number>(observer => {
      observer.next(val);
    });
    }

  constructor(private recvService: RecvService,private spinner: NgxSpinnerService) {
		recvService.messages.subscribe(msg => {			
      console.log("Response from websocket: " + msg);
      this.progress = this.setprogress(msg.progress_val);

      if(msg.current_window===2)
        this.show_progress = true;
      else
      this.show_progress = false;
		});
   
	}



  private message = {
		author: 'tutorialedge',
    message: 'this is a test message',
    progress_val: 0,
    current_window:0
	}
/*{"author":"tutorialedge","message":"","progress_val":1,"current_window":1} */
  sendMsg() {
		console.log('new message from client to websocket: ', this.message);
		this.recvService.messages.next(this.message);
		this.message.message = '';

  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
  

}
