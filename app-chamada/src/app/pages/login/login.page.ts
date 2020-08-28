import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { loadingController } from '@ionic/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authservice: AuthService,
  ) { }

  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authservice.register(this.userLogin);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authservice.register(this.userRegister);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, Aguarde...' });
    return this.loading.present();

  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
  }
}