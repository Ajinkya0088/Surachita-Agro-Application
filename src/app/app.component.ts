import { Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController, IonicModule, AlertController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  backButtonSubscription;
  [x: string]: any;
  appPages = [
    {
      title: 'संचालक मंडळ',
      url: '/members',
      icon: 'people'
    },
    {
      title: 'कंपनी बद्दल ',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'प्रोजेक्ट्स',
      url: '/projects',
      icon: 'list'
    },
    {
      title: 'नोंदणी',
      url: '/signup',
      icon: 'person-add'
    },
    {
      title: 'उत्पादनं',
      url: '/products',
      icon: 'information-circle'
    },
    {
      title: 'कृषी जागरण मराठी',
      url: '/masik',
      icon: 'book'
    },
    // {
    //   title: 'अग्रोवोन',
    //   url: '/agrowon',
    //   icon: 'book'
    // },

  ];
  loggedIn = false;
  dark = false;
  subscribe: any;

  constructor(
    private menu: MenuController,
    public platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private callNumber: CallNumber,
    private toastCtrl: ToastController,
    public alertController: AlertController,
  ) {

    this.initializeApp();
  }

  async ngOnInit() {
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }

  // checkLoginStatus() {
  //   return this.userData.isLoggedIn().then(loggedIn => {
  //     return this.updateLoggedInStatus(loggedIn);
  //   });
  // }

  // updateLoggedInStatus(loggedIn: boolean) {
  //   setTimeout(() => {
  //     this.loggedIn = loggedIn;
  //   }, 300);
  // }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(false);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    });
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Contact',
      subHeader: '',
      message: 'For Any Query call 9004047268',
      buttons: [
        {
          text: 'Call',
          role: 'Call',
          handler: () => {
            this.callNumber.callNumber("9004047268", true)
              .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Email ',
      subHeader: '',
      message: 'Send Email ajinkyapawar886@gmail.com',
      buttons: ['Ok']
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Exit ',
      subHeader: '',
      message: 'DO YOU WANT TO EXIT.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('/crop-list');
          }
        },
        {
          text: 'Exit',
          handler: () => {
              navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }

  ex() {
    navigator['app'].exitApp();
  }

}
