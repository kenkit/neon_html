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

  constructor(private recvService: RecvService,private spinner: NgxSpinnerService) {
		  recvService.messages.subscribe(msg => {			
      console.log('Response from websocket: ' + msg);
      this.progress = this.setprogress(msg.progress_val);

      if (msg.current_window === 1) {
        this.spinner.hide();
        this.show_progress =false;
        this.show_brands = true;
        this.show_details = false;
        this.flash_options = false;
      } else if (msg.current_window === 2) {
        this.spinner.hide();
        this.show_progress = false;
        this.show_brands = false;
        this.show_details = true;
        this.flash_options = false;
      } else if (msg.current_window === 3) {
        this.spinner.hide();
        this.show_progress = false;
        this.show_brands = false;
        this.show_details = false;
        this.flash_options = true;
      } else if (msg.current_window === 4) {
        this.spinner.hide();
        this.show_progress =true;
        this.show_brands = false;
        this.show_details = false;
        this.flash_options = false;
      } else if (msg.current_window === 5) {
        this.spinner.hide();
        this.show_progress = true;
        this.show_brands = false;
        this.show_details = false;
        this.flash_options = false;
        this.spinner.show();
        this.loading_message = msg.message;
        this.loading_bar_value = msg.progress_val;
      } else {
        this.spinner.show();
        this.show_progress =false;
        this.show_brands = false;
        this.show_details = false;
        this.flash_options = false;
      }
      this.current_window = msg.current_window;
		});
   
	}
  title = 'Neon';
  progress: Observable<number>;
  show_progress = false; 
  show_brands = false;
  show_details = false;
  flash_options = false;


  current_window = 1;
  loading_message = 'Connecting to service';
  loading_bar_value = 0;



  private devices_s = {
		author: 'tutorialedge',
    message: 'this is a test message',
    progress_val: 0,
    current_window: 2
	}
  setprogress(val) {
     return new Observable<number>(observer => {
      observer.next(val);
    });
    }
/*{"author":"tutorialedge","message":"Loading statements","progress_val":30,"current_window":5}  */
  next() {

		console.log('new message from client to websocket: ', this.devices_s);
		this.recvService.messages.next(this.devices_s);
		this.devices_s.message = '';
    this.devices_s.current_window++;
    if (this.devices_s.current_window > 5)
    this.devices_s.current_window = 1;
    
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

 /** 
    setTimeout(() => {
        this.spinner.hide();
    }, 5000);
    */
    

    if (this.current_window === 1) {
      this.show_progress =false;
      this.show_brands = true;
      this.show_details = false;
      this.flash_options = false;
    } else if (this.current_window === 2) {
      this.show_progress = false;
      this.show_brands = false;
      this.show_details = true;
      this.flash_options = false;
    } else if (this.current_window === 3) {
      this.show_progress =false;
      this.show_brands = false;
      this.show_details = false;
      this.flash_options = true;
    } else if (this.current_window === 4) {
      this.show_progress = false;
      this.show_brands = false;
      this.show_details = false;
      this.flash_options = true;
    } else {
      this.show_progress =false;
      this.show_brands = false;
      this.show_details = false;
      this.flash_options = false;
    }
  }
  

}
