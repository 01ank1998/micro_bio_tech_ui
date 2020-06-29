import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private loginService: LoginService
  ) {}

  mobileInput;

  ngOnInit(): void {}

  sendOtp() {
    this.loginService
      .generateOtp({ phoneNumber: this.mobileInput })
      .subscribe((res: any) => {
        if (res.success) {
          this.router.navigate(["confirm-otp"], {
            queryParams: { phoneNumber: this.mobileInput },
          });
          this._snackBar.open(
            `OTP sent successfull to ${this.mobileInput}`,
            "OK",
            {
              duration: 2000,
            }
          );
        }
      });
  }
}
