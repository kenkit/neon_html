import { Component, OnInit } from '@angular/core';
import { User } from './User';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  show_bitpay = false;
  iframeSrcUrl = "";
  yt = '<iframe class="w-100" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  constructor() {

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


    this.show_bitpay = true;
    this.iframeSrcUrl = "https://deaddevice.com/";
    this.yt = '<iframe class="w-100" src="'+this.iframeSrcUrl+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    console.log('Loading iframed: ', this.iframeSrcUrl);
  }

}
