import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from "src/app/service/login.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.scss"],
})
export class OtpComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  otp;
  phoneNumber;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.phoneNumber = params.phoneNumber;
    });
  }

  confirmOtp() {
    this.loginService
      .verifyOtp({
        phoneNumber: this.phoneNumber,
        otp: this.otp,
      })
      .subscribe((res: any) => {
        if (res.success) {
          this._snackBar.open(`Login Successfull`, "OK", {
            duration: 2000,
          });
        }
      });
  }

  onOtpChange(event) {
    this.otp = event;
  }
}
