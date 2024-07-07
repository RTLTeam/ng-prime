import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'ng_prime/overlaypanel';
import { ButtonModule } from 'ng_prime/button';
import { TableModule } from 'ng_prime/table';
import { ToastModule } from 'ng_prime/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { DataTableDoc } from './datatabledoc';
import { TemplateDoc } from './templatedoc';
import { TargetDoc } from './targetdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { InputGroupModule } from 'ng_prime/inputgroup';
import { InputGroupAddonModule } from 'ng_prime/inputgroupaddon';
import { ChipsModule } from 'ng_prime/chips';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule, AppDocModule, InputGroupModule, InputGroupAddonModule, ChipsModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, DataTableDoc, TemplateDoc, TargetDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class OverlayPanelDocModule {}
