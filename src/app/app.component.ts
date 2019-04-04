import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'home'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.nativeStorage.getItem('google_user')
      .then( data => {
        //user is previously logged and we have his data
        //we will let him access the app
        this.router.navigate(["/user"]);
        this.splashScreen.hide();
      }, err => {
        this.router.navigate(["/login"]);
        this.splashScreen.hide();
      })
      
      this.statusBar.styleDefault();
    });
  }
}
