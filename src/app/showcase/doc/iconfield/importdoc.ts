import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: `<app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { IconFieldModule } from 'ng_prime/iconfield';
import { InputIconModule } from 'ng_prime/inputicon';
import { InputTextModule } from 'ng_prime/inputtext';`
    };
}
