import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        html: `import { AvatarModule } from 'ng_prime/avatar';
import { AvatarGroupModule } from 'ng_prime/avatargroup';`
    };
}
