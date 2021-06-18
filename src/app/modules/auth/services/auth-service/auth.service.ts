import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, RegistrationRequest } from 'src/app/app.interfaces';
import { applicationUrls } from 'src/app/_helpers';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(loginRequest: LoginRequest) {
        const url = applicationUrls.loginUrl;
        return this.http.post(url, loginRequest);
    }

    register(registrationRequest: RegistrationRequest) {
        const url = applicationUrls.registrationUrl;
        return this.http.post(url, registrationRequest);
    }
}
