import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';

import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
// import * as firebase from "firebase/app";
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private authService: AuthService,
    private platform: Platform,
    
  ) { }


  initiateLogin(){
    this.authService.doGoogleLogin();
  }




}
