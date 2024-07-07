import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng_prime/button';
import { DividerModule } from 'ng_prime/divider';
import { DropdownModule } from 'ng_prime/dropdown';
import { PaginatorModule } from 'ng_prime/paginator';
import { SliderModule } from 'ng_prime/slider';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImagesDoc } from './imagesdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { LocaleDoc } from './localedoc';
import { CurrentPageReportDoc } from './currentpagereportdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PaginatorModule, ButtonModule, DividerModule, SliderModule, RouterModule, DropdownModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, ImagesDoc, StyleDoc, AccessibilityDoc, LocaleDoc, CurrentPageReportDoc]
})
export class PaginatorDocModule {}
