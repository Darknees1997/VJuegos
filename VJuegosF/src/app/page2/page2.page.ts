import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  imagen1(){
    this.navCtrl.navigateForward("img2");
    }
}

