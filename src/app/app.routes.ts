import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterModalComponent } from './component/register-modal/register-modal.component'; // Ensure this path is correct and the file exists
import { VendorModalComponent } from './component/vendor-modal/vendor-modal.component';
import { CustomerModalComponent } from './component/customer-modal/customer-modal.component';
import { ProductModalComponent } from './component/product-modal/product-modal.component';
import { EmployeeModalComponent } from './component/employee-modal/employee-modal.component';

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
  },
  { 
    path: 'vendor', 
    component: VendorModalComponent 
  },
  { 
    path: 'customer', 
    component: CustomerModalComponent 
  },
  {
    path: 'products',
    component: ProductModalComponent
  },
  {
    path: 'employees',
    component: EmployeeModalComponent  
  }
];
