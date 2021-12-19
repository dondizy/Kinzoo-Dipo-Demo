import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ComponentModule } from './component/component.module';

const firebaseConfig = {
  apiKey: environment.firebase_apiKey,
  authDomain: environment.firebase_authDomain,
  projectId: environment.firebase_projectId,
  storageBucket: environment.firebase_storageBucket,
  messagingSenderId: environment.firebase_messagingSenderId,
  appId: environment.firebase_appId,
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
