import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'avatar-group-demo',
    template: `
        <app-docsectiontext>
            <p>Grouping is available by wrapping multiple Avatar components inside an <i>AvatarGroup</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatarGroup styleClass="mb-3">
                <p-avatar image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
                <p-avatar label="+2" shape="circle" size="large" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" />
            </p-avatarGroup>
        </div>
        <app-code [code]="code" selector="avatar-group-demo"></app-code>
    `
})
export class GroupDoc {
    code: Code = {
        basic: `<p-avatarGroup styleClass="mb-3">
    <p-avatar
        image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/amyelsner.png"
        size="large"
        shape="circle" />
    <p-avatar
        image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/asiyajavayant.png"
        size="large"
        shape="circle" />
</p-avatarGroup>`,
        html: `<div class="card flex justify-content-center">
    <p-avatarGroup styleClass="mb-3">
        <p-avatar
            image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/amyelsner.png"
            size="large"
            shape="circle" />
        <p-avatar
            image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/asiyajavayant.png"
            size="large"
            shape="circle" />
        <p-avatar
            image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/onyamalimba.png"
            size="large"
            shape="circle" />
        <p-avatar
            image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/ionibowcher.png"
            size="large"
            shape="circle" />
        <p-avatar
            image="https://primefaces.org/cdn/ng_prime/images/demo/avatar/xuxuefeng.png"
            size="large"
            shape="circle" />
        <p-avatar
            label="+2"
            shape="circle"
            size="large"
            [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" />
    </p-avatarGroup>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { AvatarModule } from 'ng_prime/avatar';
import { AvatarGroupModule } from 'ng_prime/avatargroup';

@Component({
    selector: 'avatar-group-demo',
    templateUrl: './avatar-group-demo.html',
    standalone: true,
    imports: [AvatarModule, AvatarGroupModule]
})
export class AvatarGroupDemo {}`
    };
}
