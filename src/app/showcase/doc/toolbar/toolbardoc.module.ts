import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng_prime/button';
import { SplitButtonModule } from 'ng_prime/splitbutton';
import { InputTextModule } from 'ng_prime/inputtext';
import { AvatarModule } from 'ng_prime/avatar';
import { ToolbarModule } from 'ng_prime/toolbar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
