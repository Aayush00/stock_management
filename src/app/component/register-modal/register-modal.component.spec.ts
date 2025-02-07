import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterModalComponent } from './register-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('RegisterModalComponent', () => {
  let component: RegisterModalComponent;
  let fixture: ComponentFixture<RegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RegisterModalComponent] // Ensure FormsModule & ReactiveFormsModule are imported
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required fields', () => {
    expect(component.registerForm.contains('firstName')).toBeTruthy();
    expect(component.registerForm.contains('lastName')).toBeTruthy();
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('phone')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
    expect(component.registerForm.contains('confirmPassword')).toBeTruthy();
    expect(component.registerForm.contains('address')).toBeTruthy();
  });

  it('should validate required fields', () => {
    component.registerForm.controls['firstName'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['phone'].setValue('');
    component.registerForm.controls['password'].setValue('');
    component.registerForm.controls['confirmPassword'].setValue('');
    component.registerForm.controls['address'].setValue('');
    
    expect(component.registerForm.valid).toBeFalse();
  });

  it('should validate password match', () => {
    component.registerForm.controls['password'].setValue('password123');
    component.registerForm.controls['confirmPassword'].setValue('password321');
    component.registerForm.updateValueAndValidity();
    
    expect(component.registerForm.controls['confirmPassword'].errors?.['mustMatch']).toBeTruthy();
  });

  it('should allow form submission when valid', () => {
    component.registerForm.controls['firstName'].setValue('John');
    component.registerForm.controls['lastName'].setValue('Doe');
    component.registerForm.controls['email'].setValue('johndoe@example.com');
    component.registerForm.controls['phone'].setValue('1234567890');
    component.registerForm.controls['password'].setValue('password123');
    component.registerForm.controls['confirmPassword'].setValue('password123');
    component.registerForm.controls['address'].setValue('123 Street');

    expect(component.registerForm.valid).toBeTrue();
  });
});
