import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Categories} from '../Categories';
import {FlashMessagesService} from 'angular2-flash-messages';
declare var jQuery:any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
   providers: [FirebaseService,FlashMessagesService]
})
export class CategoriesComponent implements OnInit {
   categories:Categories[]; 
    date:any;
  categoryname:any;
  description:any;

  constructor(private _firebaseService:FirebaseService, public flashMessage:FlashMessagesService) { }

  ngOnInit() {
    jQuery('#date-start, #date-end').datepicker();
       this._firebaseService.getCategories().subscribe(categories => {
       console.log(categories);
      this.categories = categories;
    });
  }


  addCategorySubmit(){
        var thedate = new Date().toString();   

    let thecategory = {
      name: this.categoryname,
      description: this.description,
      date: thedate
    }

    this._firebaseService.addCategory(thecategory);
  this.flashMessage.show('Category successfully added!',
    {cssClass: 'alert-success', timeout: 3000});
   //this.router.navigate(['/']);
  }

}
