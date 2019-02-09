import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { WebsocketService } from './../websocket.service';
import { RecvService } from './../recv.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private recvService: RecvService) { }
  user: User = {
    id: 1,
    name: 'Kennedy Cheskaki',
    username: 'kenkit',
    credits: 10,
    email: 'kkituyi@yahoo.com',


  };

  ngOnInit() {
  }

}
