import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.scss']
})
export class OnlineStatusComponent implements OnInit {

  @Input('status') status!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
