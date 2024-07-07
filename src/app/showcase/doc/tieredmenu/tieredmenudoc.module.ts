import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TieredMenuModule } from 'ng_prime/tieredmenu';
import { ButtonModule } from 'ng_prime/button';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BadgeModule } from 'ng_prime/badge';
import { ToastModule } from 'ng_prime/toast';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PopupDoc } from './popupdoc';
import { TemplateDoc } from './templatedoc';
import { CommandDoc } from './commanddoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { MessageService } from 'ng_prime/api';
import { FloatLabelModule } from 'ng_prime/floatlabel';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TieredMenuModule, ButtonModule, AppDocModule, BadgeModule, ToastModule, FloatLabelModule],
    declarations: [BasicDoc, ImportDoc, PopupDoc, StyleDoc, AccessibilityDoc, TemplateDoc, CommandDoc, RouterDoc],
    exports: [AppDocModule],
    providers: [MessageService]
})
export class TieredMenuDocModule {}
