import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WebsocketService } from './websocket.service';
import {  RecvService } from './recv.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
 
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  title = 'Neon';
  progress: Observable<number>;
  
  

  setprogress(val){
     return new Observable<number>(observer => {
      observer.next(val);
    });
    }

  constructor(private recvService: RecvService,private spinner: NgxSpinnerService,private _formBuilder: FormBuilder) {
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
  isOptional = false;
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);

    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });


  }
  }
  

