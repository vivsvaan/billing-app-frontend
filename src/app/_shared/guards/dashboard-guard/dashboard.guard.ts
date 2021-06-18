import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/_helpers';

@Injectable({
    providedIn: 'root',
})
export class DashboardGuard implements CanLoad {
    constructor(private router: Router) {}
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if (Utils.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['auth']);
        return false;
    }
}
