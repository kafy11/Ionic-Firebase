import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

//AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyC581qYE4Dwi2jq8ldUtq_9XSiOTBGCKvA",
  authDomain: "angularfire2-652b3.firebaseapp.com",
  databaseURL: "https://angularfire2-652b3.firebaseio.com",
  storageBucket: "angularfire2-652b3.appspot.com",
  messagingSenderId: "684135510015"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
