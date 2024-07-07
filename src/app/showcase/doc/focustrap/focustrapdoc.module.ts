import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng_prime/button';
import { InputTextModule } from 'ng_prime/inputtext';
import { DropdownModule } from 'ng_prime/dropdown';
import { FocusTrapModule } from 'ng_prime/focustrap';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
