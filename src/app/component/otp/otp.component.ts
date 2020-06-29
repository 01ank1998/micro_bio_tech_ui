import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.scss"],
})
export class OtpComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  otp;

  ngOnInit(): void {}

  confirmOtp() {
    this._snackBar.open(`Login Successfull`, "OK", {
      duration: 2000,
    });
  }

  onOtpChange(event) {
    this.otp = event;
  }
}
