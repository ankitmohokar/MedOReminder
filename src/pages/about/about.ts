import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar} from "@ionic-native/calendar";
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private startdate1: Date;

  aptname = this.aptname;
  loc = this.loc;
  notes = this.notes;
  //myDate= new Date();
  saptyr = this.saptyr;
  saptmth = this.saptmth;
  saptdate = this.saptdate;
  sapthr = this.sapthr;
  saptmin = this.saptmin;

  eaptyr = this.eaptyr;
  eaptmth = this.eaptmth;
  eaptdate = this.eaptdate;
  eapthr = this.eapthr;
  eaptmin = this.eaptmin;
  sec = 0;
  ms = 0;
  private startdate: Date;
  private enddate: Date;


  //newdate = new Date(this.myDate);

  //today
  constructor(public navCtrl: NavController, public cal:Calendar,  private tts: TextToSpeech) {
    //this.today = new Date().toISOString();
    //console.log(this.today);

  }
  setAppointment(){
    this.startdate = new Date(parseInt(this.saptyr), parseInt(this.saptmth), parseInt(this.saptdate), parseInt(this.sapthr), parseInt(this.saptmin), 0, 0);
    this.enddate = new Date(parseInt(this.eaptyr), parseInt(this.eaptmth), parseInt(this.eaptdate), parseInt(this.eapthr), parseInt(this.eaptmin), 0, 0);
/*    console.log(this.startdate);

    this.startdate1 = new Date();
    this.startdate1.setFullYear(this.saptyr, this.saptmth, this.saptdate);
    this.startdate1.setHours(this.sapthr);
    this.startdate1.setMinutes(this.saptmin);
    this.startdate1.setSeconds(this.sec, this.ms);*/
/*
    console.log(this.eaptdate, this.eaptdate);
    console.log(this.startdate1);*/
   // console.log(this.enddate1);
    this.cal.createEvent(this.aptname, this.loc, this.notes, this.startdate, this.enddate );

    this.tts.speak('Your Appointment is set!')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

  }


}
