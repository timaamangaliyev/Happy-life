import { Checkin } from './checkin';
import { Checkout } from './checkout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent  {
  checkin = new Checkin();
  checkout = new Checkout();

  constructor(private http:HttpClient,private spinner: NgxSpinnerService) { }


  onSubmit() {
    
    console.log('this is checkin time',this.checkin);
    
    const api_url= "http://localhost:3000/api/happlylife";;
    this.spinner.show();
    
    this.http.post(api_url,JSON.stringify(this.checkin))
      .subscribe(
        (response)=>{
          window.alert('approved!');
          this.spinner.hide();
        },
        (error)=>{
         console.error(' error !', error.error);
         this.spinner.hide();
         window.alert(error.error);
        }
    );

   // alert('Thanks for submitting! Data: ' + JSON.stringify(this.checkin));
  }

  onSubmit1() {

    console.log('this is checkout time',this.checkout);
    
    const api_url= "http://localhost:3000/api/happlylife";;
    this.spinner.show();
    
    this.http.post(api_url,JSON.stringify(this.checkout))
      .subscribe(
        (response)=>{
          window.alert('approved!');
          this.spinner.hide();
        },
        (error)=>{
         console.error(' error !', error.error);
         this.spinner.hide();
         window.alert(error.error);
        }
    );
    //alert('Thanks for submitting! Data: ' + JSON.stringify(this.checkout));
  }

  
}
