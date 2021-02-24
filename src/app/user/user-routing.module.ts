import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms/rooms.component';
import { DiscoverComponent } from './discover/discover.component';
import { SettingComponent } from './setting/setting.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ContentComponent } from './content/content.component';

import {LoginGuard} from '../login.guard';

const routes: Routes = [
  {
    path:"content",
    component:ContentComponent,
    children:[
        {
          path:"rooms",
          component:RoomsComponent,
          canActivate:[LoginGuard],
        },
        {
          path:"playlist",
          component:PlaylistComponent,
        },
        {
          path:"discover",
          component:DiscoverComponent,
        },
        {
          path:"setting",
          component:SettingComponent,
        }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
