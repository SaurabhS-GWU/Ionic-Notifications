import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the NotificationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NotificationServiceProvider Provider');
  } 


  getNotification(){
  	return this.http.get('http://ec2-54-86-212-61.compute-1.amazonaws.com/app1/news')
  	.map(res => res); 
  }

}
