import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng_prime/fileupload';
import { ButtonModule } from 'ng_prime/button';
import { ToastModule } from 'ng_prime/toast';
import { TagModule } from 'ng_prime/tag';
import { ProgressBarModule } from 'ng_prime/progressbar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { AutoDoc } from './autodoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { BadgeModule } from 'ng_prime/badge';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, AppDocModule, ButtonModule, TagModule, ProgressBarModule, ToastModule, FileUploadModule, BadgeModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AdvancedDoc, AutoDoc, AccessibilityDoc]
})
export class FileUploadDocModule {}
