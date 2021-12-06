import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { GeneralLayoutComponent } from './shared/layouts/general-layout/general-layout.component';
import { SessionLayoutComponent } from './shared/layouts/session-layout/session-layout.component';

const routes: Routes =[
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: SessionLayoutComponent,
        children:[
            {
                path: '',
                loadChildren: () => import('./session/session.module').then( m => m.SessionModule)
            }            
        ]
    },
    {
        path: '',
        component: GeneralLayoutComponent,
       // canActivate: [AuthGuard],
        children:[
            {
                path: 'economico',
                loadChildren: () => import('./economico/economico.module').then( m => m.EconomicoModule)
            },
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
            },
        ]
    },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}