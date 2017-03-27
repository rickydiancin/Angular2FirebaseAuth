import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from '../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Events} from '../Events';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
    providers: [FirebaseService,FlashMessagesService]
})
export class EventDetailComponent implements OnInit {

   id:any;
   event: Events[];

  constructor(
    public af: AngularFire,
    private _firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
     public flashMessage:FlashMessagesService
  ) { 
 

  }


  ngOnInit() {

    // Get ID
    this.id = this.route.snapshot.params['id'];

    this._firebaseService.getEventDetails(this.id).subscribe(event => {
      this.event = event;
    });

  }


addCheckin(){

       this.af.auth.subscribe(auth => {
      if(auth) {
        //console.log('uid: '+auth.uid);
        //this.name = auth;
           // Get ID
    this.id = this.route.snapshot.params['id'];
       // console.log(this.id);
        this._firebaseService.checkIn(this.id, auth.uid);

    
      }
    });
  this.flashMessage.show('Event successfully created!',
    {cssClass: 'alert-success', timeout: 3000});


}
  

}
