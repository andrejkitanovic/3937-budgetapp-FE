import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  error: string = '';
  user: User;
  deleteModalActive: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userFromStorage = localStorage.getItem('activeUser');

    if (userFromStorage) {
      this.user = JSON.parse(userFromStorage);
    }
  }

  handleProfileUpdate(username: string, email: string) {
    this.loading = true;
    this.authService.updateProfile(
      username,
      email,
      (data: any) => {
        this.user = data;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  toggleDeleteModal() {
    this.deleteModalActive = !this.deleteModalActive;
  }

  handleProfileDelete() {
    this.authService.deleteProfile();
  }
}
