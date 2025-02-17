import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../services/master.service'; // Import service
import { Customer } from '../../model/Logic';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  imports:[CommonModule,ReactiveFormsModule],
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  registerForm: any;
  submitted = false;
  isLoading = false; // For showing a loading spinner

  constructor(private fb: FormBuilder, private masterService: MasterService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      //address: ['', Validators.required]
    });
  }

  // Getter for easier access to form controls in template
  get f() { return this.registerForm.controls; }

  onRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return; // Stop if form is invalid
    }

    this.isLoading = true; // Show loading state

    // Prepare form data for API
    const userData: Customer = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      password: this.registerForm.value.password,
      // address: this.registerForm.value.address,
      custId: 0,
      address: ''
    };

    // Call API to register user
    this.masterService.registerUser(userData).subscribe({
      next: (response: any) => {
        console.log('User registered successfully', response);
        alert('Registration Successful!');
        this.isLoading = false;
        this.registerForm.reset();
      },
      error: (error: any) => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.');
        this.isLoading = false;
      }
    });
  }
}
