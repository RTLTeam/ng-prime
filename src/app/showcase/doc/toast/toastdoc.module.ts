import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng_prime/button';
import { RippleModule } from 'ng_prime/ripple';
import { ProgressBarModule } from 'ng_prime/progressbar';
import { ToastModule } from 'ng_prime/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AvatarModule } from 'ng_prime/avatar';
import { ImportDoc } from './importdoc';
import { AnimationDoc } from './animationdoc';
import { BasicDoc } from './basicdoc';
import { MultipleDoc } from './multipledoc';
import { PositionDoc } from './positiondoc';
import { ResponsiveDoc } from './responsivedoc';
import { SeverityDoc } from './severitydoc';
import { LifeDoc } from './lifedoc';
import { StickyDoc } from './stickydoc';
import { StyleDoc } from './styledoc';
import { TargetDoc } from './targetdoc';
import { TemplateDoc } from './templatedoc';
import { ClearDoc } from './cleardoc';
import { HeadlessDoc } from './headlessdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ToastModule, ButtonModule, RippleModule, AvatarModule, ProgressBarModule],
    declarations: [AnimationDoc, BasicDoc, ImportDoc, MultipleDoc, PositionDoc, ResponsiveDoc, SeverityDoc, LifeDoc, StickyDoc, StyleDoc, TargetDoc, TemplateDoc, ClearDoc, HeadlessDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ToastDocModule {}
