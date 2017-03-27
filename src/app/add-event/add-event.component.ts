import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import {FirebaseService} from '../services/firebase.service';
import {Events} from '../Events';
import {Categories} from '../Categories';
import {FlashMessagesService} from 'angular2-flash-messages';
declare var jQuery:any;

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  //host: {'[@moveIn]': ''},
  providers: [FirebaseService,FlashMessagesService]
})
export class AddEventComponent implements OnInit {
  events:Events[];
  categories:Categories[];
  eventname:any;
  location:any;
  date:any;
  category:any;
  description:any;
  image:any;
  jQuery:any;

  constructor(
    private router: Router, 
    private _firebaseService:FirebaseService,
    public flashMessage:FlashMessagesService
    ) {

  }


  ngOnInit() {
  jQuery('#date-start, #date-end').datepicker();
        this._firebaseService.getEvents().subscribe(events => {
      this.events = events;
   });
         this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
   });
    

  }

    addEventSubmit(){
        var thedate = new Date().toString();   

    let theevent = {
      eventname: this.eventname,
      location: this.location,
      date: thedate,
      category:this.category,
      description: this.description,
    }

    this._firebaseService.addEvent(theevent);
  this.flashMessage.show('Event successfully created!',
    {cssClass: 'alert-success', timeout: 3000});
   //this.router.navigate(['/events']);
  }

}
