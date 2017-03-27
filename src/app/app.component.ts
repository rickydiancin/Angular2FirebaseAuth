import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FirebaseService} from './services/firebase.service';
import { Router } from '@angular/router';
import { moveIn, fallIn } from './router.animations';
import {Users} from './Users';
import {Events} from './Events';
//declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers: [FirebaseService,FlashMessagesService]
})
export class AppComponent implements OnInit{
  title = 'app works!';

  users:Users[];
   events:Events[];

  constructor(private _firebaseService:FirebaseService) {
  
  }

ngOnInit(){
    // jQuery('#date-start, #date-end').datepicker();
    this._firebaseService.getUsers().subscribe(users => {
      this.users = users;
     //  console.log(this.users);
    });
   

   

  }



}



  