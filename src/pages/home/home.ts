import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

interface Post{
  Url: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>

  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ngOnInit(){
    this.postCol = this.afs.collection('users/alovelace/liveFeed');
    this.posts = this.postCol.valueChanges();
  }

}
