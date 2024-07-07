import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'ng_prime/menubar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { TemplateDoc } from './templatedoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { InputTextModule } from 'ng_prime/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { BadgeModule } from 'ng_prime/badge';
import { RippleModule } from 'ng_prime/ripple';
import { AvatarModule } from 'ng_prime/avatar';
import { CommandDoc } from './commanddoc';
import { ToastModule } from 'ng_prime/toast';
import { RouterDoc } from './routerdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenubarModule, InputTextModule, AppDocModule, BadgeModule, RippleModule, AvatarModule, ToastModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, TemplateDoc, CommandDoc, RouterDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenubarDocModule {}
