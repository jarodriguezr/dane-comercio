import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EconomicoRoutingModule } from './economico-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ModuloEconomicoComponent } from './components/modulo-economico/modulo-economico.component';
import { SeccionEconomicoComponent } from './components/seccion-economico/seccion-economico.component';
import { PreguntaEconomicoComponent } from './components/pregunta-economico/pregunta-economico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EconomicoRoutingModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatSelectModule,
        MatTabsModule,
        MatTooltipModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        HomeComponent, 
        ModuloEconomicoComponent, 
        SeccionEconomicoComponent, 
        PreguntaEconomicoComponent
    ]
})
export class EconomicoModule {}
