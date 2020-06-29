import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  mobileInput;

  ngOnInit(): void {}

  sendOtp() {
    this.router.navigate(["confirm-otp"]);
    this._snackBar.open(`OTP sent successfull to ${this.mobileInput}`, "OK", {
      duration: 2000,
    });
  }
}
