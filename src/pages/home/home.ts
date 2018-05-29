import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private date: Date;
  medname = this.medname;
  hours = this.hours;
  min = this.min;
  sec = this.sec;



  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private tts: TextToSpeech) {

  }

  remindNotification(){
    this.date = new Date();
    this.date.setHours(this.hours);
    this.date.setMinutes(this.min);
    this.date.setSeconds(this.sec);

    this.localNotifications.schedule({
      text: this.medname,
      trigger : { at: this.date},
      led: 'FF0000',
      sound: null
    });

    this.tts.speak('Your reminder is set!')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}

//
