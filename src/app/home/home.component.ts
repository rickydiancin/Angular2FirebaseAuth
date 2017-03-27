import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
//import * as jQuery from 'jquery';
//import * as dp from 'bootstrap-datepicker';
//import * as $ from 'jquery';
//import '../../js/bootstrap-datepicker.min.js'; // some plugin

//declare var $:any;

@Component({
 // moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
    // animations: [moveIn(), fallIn()]
})
export class HomeComponent implements OnInit {
 //  jQuery:any;
 //datepicker:jQuery;

  constructor() {
  // console.log(jQuery.fn.jquery);
   //var datepicker = function(){};
   
//$('#date-start, #date-end').datepicker();


   }

  ngOnInit() {

  }

}

