import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public showMsg(){
    console.log("Button is clicked");
  }

  public openPage(){    
    this.navCtrl.push(FirstPage);
  }
}
