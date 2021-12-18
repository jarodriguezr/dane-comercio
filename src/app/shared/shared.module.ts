import { NgModule } from '@angular/core';
import { GeneralLayoutComponent } from './layouts/general-layout/general-layout.component';
import { SessionLayoutComponent } from './layouts/session-layout/session-layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { CommonModule } from '@angular/common';
import { SelectCodeComponent } from './components/select-code/select-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextDefaultComponent } from './components/input-text-default/input-text-default.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputTextboxComponent } from './components/input-textbox/input-textbox.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputTableComponent } from './components/input-table/input-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        SharedRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatSelectModule,
        MatTabsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        SelectCodeComponent,
        InputTextDefaultComponent,
        InputNumberComponent,
        InputRadioComponent,
        InputTextboxComponent,
        InputCheckboxComponent,
        InputTableComponent,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [
        GeneralLayoutComponent,
        SessionLayoutComponent,
        SelectCodeComponent,
        InputTextDefaultComponent,
        InputNumberComponent,
        InputRadioComponent,
        InputTextboxComponent,
        InputCheckboxComponent,
        InputTableComponent
    ]
})
export class SharedModule {}
