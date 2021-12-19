import { User } from './../../interface/user';
import { FirebaseService } from './../../service/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!: User[];
  isLoading: boolean = true;

  constructor(
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.users.subscribe(
      users => {
        this.users = users;
        this.isLoading = false;
      }
    )
  }

  ngOnInit(): void {
  }

}
