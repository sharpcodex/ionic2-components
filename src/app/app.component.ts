import { IonicOfficialComponentsPage } from '../pages/ionic-official-components/ionic-official-components';
import { LoginListPage } from '../pages/login/login';
import { ThemingPage } from '../pages/theming/theming';
import { AppState } from './app.global';
import { SlidesPage } from '../pages/slide/slide';
import { PopupModalsPage } from '../pages/popup-modal/popup-modal';
import { ListsPage } from '../pages/list/list';
import { PopupMenuListPage } from '../pages/popup-menu/popup-menu';
import { MiscellaneousListPage } from '../pages/miscellaneous/miscellaneous';
import { ProfileListPage } from '../pages/profile/profile';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/_home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;
  state: any;

  constructor(public platform: Platform, public global: AppState) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Ionic Official Components', component: IonicOfficialComponentsPage },
      { title: 'Login', component: LoginListPage },
      { title: 'Lists', component: ListsPage },
      { title: 'Popup Modal', component: PopupModalsPage },
      { title: 'Miscellaneous', component: MiscellaneousListPage },
      { title: 'Popup Menu', component: PopupMenuListPage },
      { title: 'Profile', component: ProfileListPage },
      // Removed for now as there were breaking changes in slides
      // { title: 'Slides', component: SlidesPage },
      { title: 'Theming', component: ThemingPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
