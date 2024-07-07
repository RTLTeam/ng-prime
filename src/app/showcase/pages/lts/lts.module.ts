import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagModule } from 'ng_prime/tag';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { LTSRoutingModule } from './lts-routing.module';
import { LTSComponent } from './lts.component';

@NgModule({
    imports: [CommonModule, LTSRoutingModule, TagModule, AppCodeModule],
    declarations: [LTSComponent]
})
export class LTSModule {}
