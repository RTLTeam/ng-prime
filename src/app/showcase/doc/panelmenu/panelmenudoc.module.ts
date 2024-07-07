import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'ng_prime/panelmenu';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { StyleDoc } from './styledoc';
import { ControlledDoc } from './controlleddoc';
import { ButtonModule } from 'ng_prime/button';
import { TemplateDoc } from './templatedoc';
import { BadgeModule } from 'ng_prime/badge';
import { CommandDoc } from './commanddoc';
import { ToastModule } from 'ng_prime/toast';
import { RouterDoc } from './routerdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, PanelMenuModule, AppDocModule, ButtonModule, BadgeModule, ToastModule],
    declarations: [BasicDoc, ImportDoc, MultipleDoc, ControlledDoc, TemplateDoc, CommandDoc, StyleDoc, AccessibilityDoc, RouterDoc],
    exports: [AppDocModule]
})
export class PanelMenuDocModule {}
