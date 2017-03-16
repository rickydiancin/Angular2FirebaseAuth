import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Events} from '../Events';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:Events[];
  imageUrl:any;
  event: any;


  constructor(private _firebaseService:FirebaseService) { 


  }

  ngOnInit() {
   this._firebaseService.getEvents().subscribe(events => {
     console.log(events);
      this.events = events;
/*
    let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.event.path);
      storageRef.child(this.event.path).getDownloadURL().then((url) => {
        // Set image url
        this.event.path= url;
      }).catch((error) => {
        console.log(error);
      });

*/

    });

  }


}
