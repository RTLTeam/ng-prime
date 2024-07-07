import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InplaceModule } from 'ng_prime/inplace';
import { InputTextModule } from 'ng_prime/inputtext';
import { TableModule } from 'ng_prime/table';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DataDoc } from './datadoc';
import { ImageDoc } from './imagedoc';
import { ImportDoc } from './importdoc';
import { InputDoc } from './inputdoc';
import { StyleDoc } from './styledoc';
import { LazyDoc } from './lazydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, InplaceModule, InputTextModule, TableModule],
    declarations: [BasicDoc, DataDoc, ImageDoc, ImportDoc, InputDoc, StyleDoc, LazyDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class InplaceDocModule {}
