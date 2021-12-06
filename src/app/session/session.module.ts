import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SessionRoutingModule } from './session-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SessionRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CommonModule
    ],
    exports: [],
    declarations: [LoginComponent, NotfoundComponent]
})
export class SessionModule {}