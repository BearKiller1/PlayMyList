import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { DiscoverComponent } from './discover/discover.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SettingComponent } from './setting/setting.component';
import { ContentComponent } from './content/content.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoomsComponent, DiscoverComponent, PlaylistComponent, SettingComponent, ContentComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ContentComponent]
})
export class UserModule { }
