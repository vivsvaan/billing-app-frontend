import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './modules/auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './_shared/services/http-interceptor/http-interceptor.service';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
