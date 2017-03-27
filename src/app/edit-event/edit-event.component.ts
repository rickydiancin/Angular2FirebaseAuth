import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Events} from '../Events';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  id:any;
   event: Events[];
   eventname;
   location;
   date;
   description;


  constructor(
       private _firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
      // Get ID
    this.id = this.route.snapshot.params['id'];

    this._firebaseService.getEventDetails(this.id).subscribe(event => {
      //this.event = event;
      //this.eventname = event.eventname;
     // this.location = event.location;

    });
  }

}
