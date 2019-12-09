import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SongModalComponent } from './components/song-modal/song-modal.component';
import { SongDurationPipe } from './pipes/song-duration.pipe';

@NgModule({
  declarations: [
    HomePage,
    SongModalComponent,
    SongDurationPipe
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
