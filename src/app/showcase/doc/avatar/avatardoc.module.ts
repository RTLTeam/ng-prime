import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'ng_prime/avatar';
import { BadgeModule } from 'ng_prime/badge';
import { AvatarGroupModule } from 'ng_prime/avatargroup';
import { InputTextModule } from 'ng_prime/inputtext';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { GroupDoc } from './avatargroupdoc';
import { IconDoc } from './icondoc';
import { ImageDoc } from './imagedoc';
import { ImportDoc } from './importdoc';
import { LabelDoc } from './labeldoc';
import { AvatarStyleDoc } from './avatarstyledoc';
import { ShapeDoc } from './shapedoc';
import { SizeDoc } from './sizedoc';
import { BadgeDoc } from './badgedoc';
import { TemplateDoc } from './templatedoc';
import { AvatarGroupStyleDoc } from './avatargroupstyledoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, InputTextModule, FormsModule, AppDocModule, AvatarModule, AvatarGroupModule, BadgeModule],
    declarations: [ImportDoc, LabelDoc, IconDoc, GroupDoc, ImageDoc, AvatarStyleDoc, AvatarGroupStyleDoc, ShapeDoc, SizeDoc, BadgeDoc, TemplateDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class AvatarDocModule {}
