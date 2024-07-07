import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng_prime/button';
import { InputSwitchModule } from 'ng_prime/inputswitch';
import { RadioButtonModule } from 'ng_prime/radiobutton';
import { SidebarModule } from 'ng_prime/sidebar';
import { AppConfigComponent } from './app.config.component';
import { SelectButtonModule } from 'ng_prime/selectbutton';
@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule, SelectButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
