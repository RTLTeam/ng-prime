import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng_prime/button';
import { CardModule } from 'ng_prime/card';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, CardModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, AdvancedDoc, StyleDoc, AccessibilityDoc]
})
export class CardDocModule {}
