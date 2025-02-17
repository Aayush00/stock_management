import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeList } from '../../model/Logic';
import { Router, RouterModule } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee-modal',
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-modal.component.html',
  styleUrl: './employee-modal.component.css'
})
export class EmployeeModalComponent {
  
  employees: EmployeeList[] = [];
  apiService: any;

  constructor(private router: Router, private masterService: MasterService) {} // ✅ Inject MasterService


  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.masterService.getEmployeeDetails().subscribe(
      (data: EmployeeList[]) => {
        this.employees = data;
      },
      (error: any) => {
        console.error('Error fetching employees:', error);
      }
    );

    // Mock data - replace this with actual API call
    // this.employees = [
    //   { employeeId: 1, employeeName: 'John Doe', address: 'New York, USA', email: 'john@example.com', empPhoneNumber: '123-456-7890' },
    //   { employeeId: 2, employeeName: 'Jane Smith', address: 'Los Angeles, USA', email: 'jane@example.com', empPhoneNumber: '987-654-3210' },
    //   { employeeId: 3, employeeName: 'Alice Johnson', address: 'Chicago, USA', email: 'alice@example.com', empPhoneNumber: '555-666-7777' }
    // ];
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}


