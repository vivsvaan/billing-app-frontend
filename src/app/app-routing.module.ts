import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/auth/auth.module').then((m) => m.AuthModule),
        canActivate: [],
        canLoad: [],
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
        canActivate: [],
        canLoad: [],
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
