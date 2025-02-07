import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule,RegisterModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isModalOpen: boolean = false;
  isRegisterModalOpen: boolean = false; // Ensure this is defined

  constructor(private router: Router) {}

  onTabClick(tabName: string) {
    alert(`${tabName} works!`);
  }

  openModal(): void {
    console.log("Opening modal...");
    this.isModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    console.log("Closing modal...");
    this.isModalOpen = false;
    document.body.classList.remove('modal-open');
  }

  onLogin() {
    console.log('Login clicked');
  }

  openRegisterPage(): void {
    this.router.navigate(['/register']); // Updated to use Angular routing
  }

  openRegisterModal(): void {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal(): void {
    this.isRegisterModalOpen = false;
  }
}
