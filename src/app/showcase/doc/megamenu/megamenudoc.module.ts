import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VerticalDoc } from './verticaldoc';
import { MegaMenuModule } from 'ng_prime/megamenu';
import { InputTextModule } from 'ng_prime/inputtext';
import { ButtonModule } from 'ng_prime/button';
import { AccessibilityDoc } from './accessibilitydoc';
import { AvatarModule } from 'ng_prime/avatar';
import { CommandDoc } from './commanddoc';
import { RouterDoc } from './routerdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MegaMenuModule, InputTextModule, ButtonModule, AppDocModule, AvatarModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, TemplateDoc, VerticalDoc, CommandDoc, RouterDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MegaMenuDocModule {}
