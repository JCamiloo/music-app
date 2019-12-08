import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SongModalComponent } from './components/song-modal/song-modal.component';

@NgModule({
  declarations: [
    HomePage,
    SongModalComponent
  ],
  entryComponents: [
    SongModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
})
export class HomePageModule {}
