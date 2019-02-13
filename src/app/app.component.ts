import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4HqRQQBrPBTW0e4jgfDQuq9ghZ9zTM2U',
      authDomain: 'recipes-ng-course.firebaseapp.com'
    });
  }
}
