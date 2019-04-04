

import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
// import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertController, Platform, LoadingController } from "@ionic/angular";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import * as firebase from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';
import { environment } from "../../environments/environment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  user: Observable<firebase.User>;

  constructor(
    // public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private googlePlus: GooglePlus,
    private platform: Platform,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public nativeStorage: NativeStorage,
    public router: Router
  ) {    

    this.user = this.afAuth.authState;

    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.doGoogleLogin();
    } else {
      // this.webGoogleLogin();
    }
  }





  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user => {
        //save user data on the native storage
        this.nativeStorage.setItem('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
        .then(() => {
           this.router.navigate(["/list"]);
        }, (error) => {
          console.log(error);
        })
        loading.dismiss();
      }, err => {
        console.log(err);
        if(!this.platform.is('cordova')){
          this.presentAlert();
        }
        loading.dismiss();
      })
  }
  // async webGoogleLogin(): Promise<void> {
  //   try {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     const credential = await this.afAuth.auth.signInWithPopup(provider);
  
  //   } catch(err) {
  //     console.log(err)
  //   }
  
  // }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }


  async presentLoading(loading) {
    return await loading.present();
  }
  
}
