import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'builtin-themes-doc',
    template: `
        <app-docsectiontext>
            <p>
                PrimeNG ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator
                <span class="border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary"><span class="pi pi-palette"></span></span> at the topbar to switch themes.
            </p>
        </app-docsectiontext>
        <div class="h-20rem overflow-auto">
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
        </div>
    `
})
export class BuiltInThemesDoc {
    code: Code = {
        basic: `ng_prime/resources/themes/bootstrap4-light-blue/theme.css
ng_prime/resources/themes/bootstrap4-light-purple/theme.css
ng_prime/resources/themes/bootstrap4-dark-blue/theme.css
ng_prime/resources/themes/bootstrap4-dark-purple/theme.css
ng_prime/resources/themes/md-light-indigo/theme.css
ng_prime/resources/themes/md-light-deeppurple/theme.css
ng_prime/resources/themes/md-dark-indigo/theme.css
ng_prime/resources/themes/md-dark-deeppurple/theme.css
ng_prime/resources/themes/mdc-light-indigo/theme.css
ng_prime/resources/themes/mdc-light-deeppurple/theme.css
ng_prime/resources/themes/mdc-dark-indigo/theme.css
ng_prime/resources/themes/mdc-dark-deeppurple/theme.css
ng_prime/resources/themes/fluent-light/theme.css
ng_prime/resources/themes/lara-light-blue/theme.css
ng_prime/resources/themes/lara-light-indigo/theme.css
ng_prime/resources/themes/lara-light-purple/theme.css
ng_prime/resources/themes/lara-light-teal/theme.css
ng_prime/resources/themes/lara-dark-blue/theme.css
ng_prime/resources/themes/lara-dark-indigo/theme.css
ng_prime/resources/themes/lara-dark-purple/theme.css
ng_prime/resources/themes/lara-dark-teal/theme.css
ng_prime/resources/themes/soho-light/theme.css
ng_prime/resources/themes/soho-dark/theme.css
ng_prime/resources/themes/viva-light/theme.css
ng_prime/resources/themes/viva-dark/theme.css
ng_prime/resources/themes/mira/theme.css
ng_prime/resources/themes/nano/theme.css
ng_prime/resources/themes/saga-blue/theme.css
ng_prime/resources/themes/saga-green/theme.css
ng_prime/resources/themes/saga-orange/theme.css
ng_prime/resources/themes/saga-purple/theme.css
ng_prime/resources/themes/vela-blue/theme.css
ng_prime/resources/themes/vela-green/theme.css
ng_prime/resources/themes/vela-orange/theme.css
ng_prime/resources/themes/vela-purple/theme.css
ng_prime/resources/themes/arya-blue/theme.css
ng_prime/resources/themes/arya-green/theme.css
ng_prime/resources/themes/arya-orange/theme.css
ng_prime/resources/themes/arya-purple/theme.css
ng_prime/resources/themes/nova/theme.css
ng_prime/resources/themes/nova-alt/theme.css
ng_prime/resources/themes/nova-accent/theme.css
ng_prime/resources/themes/luna-amber/theme.css
ng_prime/resources/themes/luna-blue/theme.css
ng_prime/resources/themes/luna-green/theme.css
ng_prime/resources/themes/luna-pink/theme.css
ng_prime/resources/themes/rhea/theme.css`
    };
}
