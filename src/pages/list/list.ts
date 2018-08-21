import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import {Observable} from 'rxjs/Rx';
import {ChangeDetectorRef} from '@angular/core';
import {NotificationServiceProvider} from '../../providers/notification-service/notification-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: any; 
  notification: any; 
  result: any;
  //interval: Subscription; 
 // click: Subscription; 

  constructor(public navCtrl: NavController, private cd:ChangeDetectorRef, private notificationProvider: NotificationServiceProvider, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

     let TIME_IN_MS = 2000;
      let hideFooterTimeout = setTimeout( () => {
         this.loadNotifications();
     }, TIME_IN_MS);
    this.result = [];
 


  }

  ionViewWillEnter(){

   

      let TIME_IN_MS = 2000;     
      Observable.interval(1 * 60 * 1000).subscribe(x=> {
         let hideFooterTimeout = setTimeout( () => {
         this.loadNotifications();
    }, TIME_IN_MS);
    });
     
  } 

  ionViewWillLeave(){

  }

  loadNotifications(){
     this.notificationProvider.getNotification()
        .subscribe(notification =>{
          this.items = notification;
         // this.result = notification;

         // for (let i = 0; i < this.result.length; i++) {
           //   this.items.push({
           //   title: this.result[i].title,
           //   note: this.result[i].description,
           //   url: this.result[i].url,
           //   time: this.result[i].updated

          //}); 
         // }
         // alert("done3");
          this.cd.detectChanges();

        });
  }

  itemTapped(event, item) {

    this.navCtrl.push('NotificationPage', {item: item});
  }
}
