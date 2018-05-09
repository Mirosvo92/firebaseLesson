import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseListObservable} from "angularfire2/database-deprecated";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messages: AngularFireList<any>;
  user;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.messages = this.db.list('/messages');
    this.auth.authState.subscribe(user => {
      this.user = user;
    });
  }

  sendMessage(messageText) {
    console.log(messageText);
    this.messages.push({
      message: messageText,
      user: {
        name: this.user.displayName,
        email: this.user.email,
        avatar: this.user.photoURL
      }
    }).then(() => messageText = '');
  }

}
