import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService, private authService: AuthService) {
  }

  onSave() {
    this.dataStorage.storeRecipes().subscribe((result) => console.log(result), (error) => console.log(error));
  }

  onFetch() {
    this.dataStorage.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
