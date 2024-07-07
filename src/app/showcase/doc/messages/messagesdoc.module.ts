import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'ng_prime/messages';
import { MessageModule } from 'ng_prime/message';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { MessagesStyleDoc } from './messagesstyledoc';
import { MessageStyleDoc } from './messagestyledoc';
import { ButtonModule } from 'ng_prime/button';
import { InputTextModule } from 'ng_prime/inputtext';
import { SeverityDoc } from './severitydoc';
import { ClosableDoc } from './closabledoc';
import { StaticDoc } from './staticdoc';
import { DynamicDoc } from './dynamicdoc';
import { ServiceDoc } from './servicedoc';
import { InlineDoc } from './inlinedoc';
import { AnimationDoc } from './animationdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { AvatarModule } from 'ng_prime/avatar';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, RouterModule, MessagesModule, ButtonModule, MessageModule, InputTextModule, AvatarModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, ClosableDoc, StaticDoc, DynamicDoc, ServiceDoc, SeverityDoc, InlineDoc, MessagesStyleDoc, AnimationDoc, MessageStyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MessagesDocModule {}
