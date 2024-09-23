import { Routes } from '@angular/router';
import { ConfigComponent } from './page/config/config.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { preload: false },
  },
  { path: 'config',
    component: ConfigComponent
  }
];
