import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  ApiUrl = "http://localhost:4000/v1";

  constructor(private http: HttpClient) {}

  generateOtp(data) {
    return this.http.post(`${this.ApiUrl}/generate-otp`, data);
  }

  verifyOtp(data) {
    return this.http.post(`${this.ApiUrl}/verify-otp`, data);
  }
}
