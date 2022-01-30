import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() account: User;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('activeUser');
    if (!user) return;

    console.log(user);
    this.account = JSON.parse(user);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
