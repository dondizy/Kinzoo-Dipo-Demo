import { CustomPipeModule } from 'src/app/pipe/custom-pipe.module';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OnlineStatusComponent
  ],
  imports: [
    CommonModule,
    CustomPipeModule
  ],
  exports: [
    OnlineStatusComponent
  ],
})
export class ComponentModule { }
