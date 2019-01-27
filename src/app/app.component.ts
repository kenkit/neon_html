import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WebsocketService } from './websocket.service';
import {  RecvService } from './recv.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, RecvService  ]
  
})

export class AppComponent implements OnInit{
 
  title = 'Neon';
  progress: Observable<number>;
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  setprogress(val){
     return new Observable<number>(observer => {
      observer.next(val);
    });
    }

  constructor(private recvService: RecvService,private spinner: NgxSpinnerService) {
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
  
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
  

}
