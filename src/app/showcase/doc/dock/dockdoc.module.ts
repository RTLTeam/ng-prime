import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'ng_prime/dialog';
import { DockModule } from 'ng_prime/dock';
import { GalleriaModule } from 'ng_prime/galleria';
import { MenubarModule } from 'ng_prime/menubar';
import { RadioButtonModule } from 'ng_prime/radiobutton';
import { TerminalModule } from 'ng_prime/terminal';
import { ToastModule } from 'ng_prime/toast';
import { TreeModule } from 'ng_prime/tree';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, DockModule, FormsModule, RadioButtonModule, MenubarModule, ToastModule, DialogModule, GalleriaModule, TerminalModule, TreeModule, AppDocModule],
    declarations: [AdvancedDoc, BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
