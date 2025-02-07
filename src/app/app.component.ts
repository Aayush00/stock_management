import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule,NavbarComponent]
})
export class AppComponent {
  showLoginModal = false;
  showRegisterModal = false;

  // Open login modal
  openLoginModal() {
    this.showLoginModal = true;
  }

  // Close login modal
  closeLoginModal() {
    this.showLoginModal = false;
  }

  // Open register modal & close login modal
  openRegisterModal() {
    this.showLoginModal = false;
    this.showRegisterModal = true;
  }

  // Close register modal
  closeRegisterModal() {
    this.showRegisterModal = false;
  }
}
