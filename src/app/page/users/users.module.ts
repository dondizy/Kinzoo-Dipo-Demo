import { ComponentModule } from './../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CustomPipeModule } from 'src/app/pipe/custom-pipe.module';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentModule,
    CustomPipeModule
  ]
})
export class UsersModule { }
