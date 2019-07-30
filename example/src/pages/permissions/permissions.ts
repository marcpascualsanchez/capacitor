import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Capacitor, PermissionType } from '@capacitor/core';
const { Plugins } = Capacitor;
/**
 * Generated class for the PermissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html',
})
export class PermissionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PermissionsPage');
  }

  a(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Has Permission?',
      message
    });
    alert.present();
  }

  async checkCamera() {
    const has = await Plugins.Permissions.hasPermission({ type: PermissionType.Camera });
    this.a('Camera? ' + has.value);
  }

  async checkPhotos() {
    const has = await Plugins.Permissions.hasPermission({ type: PermissionType.Photos });
    this.a('Photos? ' + has.value);
  }

  async checkGeo() {
    const has = await Plugins.Permissions.hasPermission({ type: PermissionType.Geolocation });
    this.a('Geo? ' + has.value);
  }

  async checkPush() {
    const has = await Plugins.Permissions.hasPermission({ type: PermissionType.PushNotifications });
    this.a('Push? ' + has.value);
  }

  async checkClipboard() {
    const has = await Plugins.Permissions.hasPermission({ type: PermissionType.Clipboard });
    this.a('Clipboard? ' + has.value);
  }
}
