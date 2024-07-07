import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperModule } from 'ng_prime/stepper';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { ButtonModule } from 'ng_prime/button';
import { VerticalDoc } from './verticaldoc';
import { LinearDoc } from './lineardoc';
import { TemplateDoc } from './templatedoc';
import { PasswordModule } from 'ng_prime/password';
import { InputIconModule } from 'ng_prime/inputicon';
import { IconFieldModule } from 'ng_prime/iconfield';
import { InputTextModule } from 'ng_prime/inputtext';
import { ToggleButtonModule } from 'ng_prime/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, StepperModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, PasswordModule, InputIconModule, IconFieldModule, InputTextModule, ToggleButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, VerticalDoc, LinearDoc, TemplateDoc, AccessibilityDoc]
})
export class StepperDocModule {}
