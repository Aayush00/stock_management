import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RegisterModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isModalOpen: boolean = false;
  isRegisterModalOpen: boolean = false;
  activeDropdown: string | null = null;
  hideTimeout: any;

  constructor(private router: Router) {}

  // Open Login Modal
  openModal(): void {
    this.isModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.classList.remove('modal-open');
  }

  onLogin() {
    console.log('Login clicked');
  }

  // Open Register Modal
  openRegisterModal(): void {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal(): void {
    this.isRegisterModalOpen = false;
  }

  // Navigate to Register Page
  openRegisterPage(): void {
    this.closeModal(); // Close modal before navigating
    this.router.navigate(['/register']);
  }

  // Show Dropdown
  showDropdown(section: string) {
    clearTimeout(this.hideTimeout);
    this.activeDropdown = section;
  }

  // Keep Dropdown Visible on Hover
  keepDropdown(section: string) {
    clearTimeout(this.hideTimeout);
    this.activeDropdown = section;
  }

  // Hide Dropdown with Delay
  scheduleHideDropdown(section: string) {
    this.hideTimeout = setTimeout(() => {
      if (this.activeDropdown === section) {
        this.activeDropdown = null;
      }
    }, 300);
  }

  // Hide All Dropdowns
  hideAllDropdowns() {
    this.activeDropdown = null;
  }

  // Navigate to Different Pages
  navigateToPage(pageName: string) {
    this.router.navigate([`/${pageName}`]);
    this.hideAllDropdowns(); // Hide dropdowns after navigation
  }
}
