import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import {NotificationServiceProvider} from '../../providers/notification-service/notification-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, url:string, icon: string}>; 
  notification: any; 
  result: any;

  constructor(public navCtrl: NavController, private notificationProvider: NotificationServiceProvider, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
 


  }

  ionViewDidLoad(){
      
      this.notificationProvider.getNotification()
        .subscribe(notification =>{
         
          this.result = notification;

          for (let i = 0; i < this.result.length; i++) {
              this.items.push({
              title: this.result[i].title,
              note: this.result[i].description,
              url: this.result[i].url,
              icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          }); 
          }

        });
  } 

  itemTapped(event, item) {

    this.navCtrl.push('NotificationPage', {item: item});
  }
}
