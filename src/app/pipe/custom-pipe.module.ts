import { UserTypePipe, OnlineStatusPipe } from './user.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [UserTypePipe, OnlineStatusPipe],
  imports: [
    CommonModule
  ],
  exports: [UserTypePipe, OnlineStatusPipe]
})
export class CustomPipeModule { }
