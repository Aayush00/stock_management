import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterModalComponent } from './component/register-modal/register-modal.component'; // Ensure this path is correct and the file exists

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Add your routes here
  { 
    path: '', 
    component: NavbarComponent 
  },
  { 
    path: 'register', 
    component: RegisterModalComponent 
  }
];
