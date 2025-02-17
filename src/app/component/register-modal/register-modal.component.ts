import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../services/master.service'; // Import service
import { Customer } from '../../model/Logic';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  standalone  : true,
  imports:[CommonModule,ReactiveFormsModule],
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  registerForm!: FormGroup;
  submitted = false;
  isLoading = false;
  masterService = inject(MasterService); // Cleaner DI
  router = inject(Router);

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom Validator to check password and confirmPassword match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Getter for easier access to form controls in template
  get f() { return this.registerForm.controls; } // For easy access in template

  onRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    this.isLoading = true;

    const userData: Customer = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      password: this.registerForm.value.password,
      custId: 0,
     // address: ''
    };

    this.masterService.registerUser(userData).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        alert('Registration Successful!');
        this.registerForm.reset();
        this.submitted = false;
        this.isLoading = false;
        this.router.navigate(['/home']); // Navigate to login page after registration
      },
      error: (error) => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.');
        this.isLoading = false;
      }
    });
  }
}
