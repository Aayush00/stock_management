import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseBody, Customer,EmployeeList } from '../model/Logic';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl: string = 'http://127.0.0.1:4040/SpareParts';
  private apiUrlTest: string = 'http://localhost:8081/SpareParts';

  constructor(private http: HttpClient) {}

  // API Call for Registering a New User
  registerUser(userData: Customer): Observable<APIResponseBody> {
    const url = `${this.apiUrl}/registrationDetails`;
    return this.http.post<APIResponseBody>(url, userData);
  }

  getEmployeeDetails(): Observable<EmployeeList[]> {
    return this.http.get<EmployeeList[]>(`${this.apiUrl}/getEmployeeDetails`);
  }
}
