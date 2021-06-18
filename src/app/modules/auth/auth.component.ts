import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
    LoginRequest,
    LoginResponse,
    RegistrationRequest,
    UserInfo,
} from 'src/app/app.interfaces';
import { Utils } from 'src/app/_helpers';
import { AuthService } from './services/auth-service/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    registrationForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {}

    login() {
        if (this.loginForm.invalid) {
            // show toastr
            return;
        }

        const username = this.loginForm.controls.username.value;
        const password = this.loginForm.controls.password.value;

        const loginRequest: LoginRequest = {
            username: username,
            password: password,
        };

        this.authService
            .login(loginRequest)
            .subscribe((response: LoginResponse) => {
                const userInfo: UserInfo = {
                    name: '',
                    username: response.username,
                    email: '',
                    password: '',
                    access_token: response.access_token,
                    refresh_token: '',
                    access_token_expiry: '',
                };
                Utils.storageHelper.userInfo = userInfo;
                this.router.navigate(['/dashboard']);
            });
    }

    register() {
        if (this.registrationForm.invalid) {
            // show toastr
            return;
        }

        const username = this.registrationForm.controls.username.value;
        const email = this.registrationForm.controls.emaill.value;
        const password = this.registrationForm.controls.password.value;

        const registrationRequest: RegistrationRequest = {
            username: username,
            email: email,
            password: password,
        };

        this.authService
            .register(registrationRequest)
            .subscribe((response: LoginResponse) => {
                const userInfo: UserInfo = {
                    name: '',
                    username: response.username,
                    email: '',
                    password: '',
                    access_token: response.access_token,
                    refresh_token: '',
                    access_token_expiry: '',
                };
                Utils.storageHelper.userInfo = userInfo;
                this.router.navigate(['dashboard']);
            });
    }
}
