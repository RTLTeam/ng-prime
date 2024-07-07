import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { ProgressBarModule } from 'ng_prime/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'ng_prime/toast';`
    };
}
