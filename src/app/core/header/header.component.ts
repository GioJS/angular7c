import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private dataStorage: DataStorageService, private store: Store<fromApp.AppState>) {
  }

  onSave() {
    this.dataStorage.storeRecipes().subscribe((result) => console.log(result), (error) => console.log(error));
  }

  onFetch() {
    this.dataStorage.getRecipes();
  }

  onLogout() {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }
}