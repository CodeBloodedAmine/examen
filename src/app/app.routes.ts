import { Routes } from '@angular/router';
import { MuseumSelectedComponent } from './components/museum-selected/museum-selected.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { InfosComponent } from './components/infos/infos.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddMuseumComponent } from './components/museum-add/museum-add.component';
import { MuseumAboutComponent } from './components/museum-about/museum-about.component';
import { MuseumDashboardComponent } from './components/museum-dashboard/museum-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/infos', pathMatch: 'full' },
    {
      path: 'dashboard',
      component: MuseumDashboardComponent,
      children: [
        { path: '', redirectTo: 'museum', pathMatch: 'full' },
        { path: 'museum', component: MuseumListComponent },
        { path: 'ajoutm', component: AddMuseumComponent },
        { path: 'about', component: MuseumAboutComponent },
      ],
    },
    { path: 'museum', component: MuseumListComponent },
    { path: 'infos', component: InfosComponent },
    { path: 'theme/:theme/country/:country', component: MuseumSelectedComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
  ];
  