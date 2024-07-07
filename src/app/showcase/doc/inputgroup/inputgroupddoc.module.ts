import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng_prime/button';
import { CheckboxModule } from 'ng_prime/checkbox';
import { InputTextModule } from 'ng_prime/inputtext';
import { RadioButtonModule } from 'ng_prime/radiobutton';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ButtonDoc } from './buttondoc';
import { CheckboxDoc } from './checkboxdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { InputGroupModule } from 'ng_prime/inputgroup';
import { InputGroupAddonModule } from 'ng_prime/inputgroupaddon';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, InputGroupModule, InputGroupAddonModule, RadioButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, ButtonDoc, CheckboxDoc, AccessibilityDoc]
})
export class InputGroupDocModule {}
