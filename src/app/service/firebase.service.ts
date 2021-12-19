import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users!: Observable<User[]>;
  constructor(
    private firestore: AngularFirestore,
  ) {
    this.getUsers();
    // this.addMockUsers();
  }

  private getUsers() {
    this.users = (this.firestore.collection('user').valueChanges() as Observable<any>);
    this.users.subscribe(
      data => {
      }
    )
  }


  // private addMockUsers() {
  //   const mockUsers = [{
  //     "name": "Violet Cottesford",
  //     "email": "vcottesford0@goo.gl",
  //     "gender": "Non-binary",
  //     "isAdmin": true,
  //     "online": true
  //   }, {
  //     "name": "Helaine Finlator",
  //     "email": "hfinlator1@zdnet.com",
  //     "gender": "Female",
  //     "isAdmin": false,
  //     "online": false
  //   }, {
  //     "name": "Aldin De La Salle",
  //     "email": "ade2@boston.com",
  //     "gender": "Genderqueer",
  //     "isAdmin": false,
  //     "online": true
  //   }, {
  //     "name": "Shae Rolingson",
  //     "email": "srolingson3@github.io",
  //     "gender": "Male",
  //     "isAdmin": false,
  //     "online": true
  //   }, {
  //     "name": "Bonita Effnert",
  //     "email": "beffnert4@nyu.edu",
  //     "gender": "Polygender",
  //     "isAdmin": true,
  //     "online": false
  //   }, {
  //     "name": "Cathlene Bytheway",
  //     "email": "cbytheway5@t.co",
  //     "gender": "Male",
  //     "isAdmin": false,
  //     "online": false
  //   }, {
  //     "name": "Renee Thunder",
  //     "email": "rthunder6@google.es",
  //     "gender": "Female",
  //     "isAdmin": true,
  //     "online": true
  //   }, {
  //     "name": "Mina Scholfield",
  //     "email": "mscholfield7@yahoo.co.jp",
  //     "gender": "Agender",
  //     "isAdmin": false,
  //     "online": false
  //   }, {
  //     "name": "Eadie Raddon",
  //     "email": "eraddon8@spotify.com",
  //     "gender": "Female",
  //     "isAdmin": false,
  //     "online": true
  //   }, {
  //     "name": "Josh Wakeley",
  //     "email": "jwakeley9@yahoo.com",
  //     "gender": "Female",
  //     "isAdmin": true,
  //     "online": false
  //   }, {
  //     "name": "Ketti Watsham",
  //     "email": "kwatshama@tuttocitta.it",
  //     "gender": "Non-binary",
  //     "isAdmin": false,
  //     "online": false
  //   }, {
  //     "name": "Olia Rewcassell",
  //     "email": "orewcassellb@behance.net",
  //     "gender": "Polygender",
  //     "isAdmin": true,
  //     "online": false
  //   }, {
  //     "name": "Raye Johnigan",
  //     "email": "rjohniganc@ucsd.edu",
  //     "gender": "Bigender",
  //     "isAdmin": false,
  //     "online": false
  //   }, {
  //     "name": "Deloris Pods",
  //     "email": "dpodsd@opensource.org",
  //     "gender": "Female",
  //     "isAdmin": true,
  //     "online": true
  //   }, {
  //     "name": "Avictor Cortez",
  //     "email": "acorteze@myspace.com",
  //     "gender": "Female",
  //     "isAdmin": true,
  //     "online": false
  //   }]

  //   mockUsers.forEach(
  //     (user: User) => {
  //       this.firestore.collection('user').doc(user.email).set(user).then(
  //         data => {
  //           console.log("Add user response >>> ", data);
  //         }
  //       ).catch(
  //         error => {
  //           console.log("Add user error >>> ", error);
  //         }
  //       )
  //     }
  //   )
  // }



}
