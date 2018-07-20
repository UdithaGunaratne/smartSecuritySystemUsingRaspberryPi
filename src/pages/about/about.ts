import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

interface Post{
  date: string;
  Url: string;
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  postCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>

  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ngOnInit(){
    this.postCol = this.afs.collection('users/alovelace/savedImages');
    this.posts = this.postCol.valueChanges();
  }

}
