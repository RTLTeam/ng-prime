import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'ng_prime/tabmenu';
import { ButtonModule } from 'ng_prime/button';
import { RippleModule } from 'ng_prime/ripple';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ActiveDoc } from './activedoc';
import { BasicDoc } from './basicdoc';
import { ControlledDoc } from './controlleddoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { ScrollableDoc } from './scrollabledoc';
import { TemplateDoc } from './templatedoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { CommandDoc } from './commanddoc';
import { ToastModule } from 'ng_prime/toast';
import { RouterDoc } from './routerdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TabMenuModule, ButtonModule, RippleModule, AppDocModule, ToastModule],
    declarations: [BasicDoc, ScrollableDoc, ImportDoc, StyleDoc, ControlledDoc, ActiveDoc, TemplateDoc, CommandDoc, RouterDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class TabMenuDocModule {}
