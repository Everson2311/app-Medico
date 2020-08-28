import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService
    ) {

  }

  ngOnInit() { }

  async logout() {
    // await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      // this.loading.dismiss();
    }
  }

  // async presentLoading() {
  //   this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
  //   return this.loading.present();
  // }
}
