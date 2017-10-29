import { Component, Type } from '@angular/core';
import { IButton } from './directives/drawer/IButton';
import { FileUploadComponent } from './directives/fileupload/fileupload.component';
import { AduitComponent } from './directives/Audit/audit.component';
import { HistoryComponent } from './directives/History/history.component';
@Component({
    selector: 'parent',
    template: `<div class="row">
  <d-button [buttonInput]="attachmentsButton" [componentType]="fileuploadComponent" ></d-button>
  <d-button [buttonInput]="AuditButton" [componentType]="auditComponent" ></d-button>
  <d-button [buttonInput]="HistroyButton" [componentType]="historyComponent" ></d-button>
  
</div>
<div class=row>
<drawer></drawer>
</div>`
})
export class ParentComponent {
    attachmentsButton: IButton =
    {
        Name: 'Attachments',
        Icon: 'Test'
        //Action: this.actionOne.bind(this) // we need to make sure this is scoped correctly
    };
    AuditButton: IButton =
    {
        Name: 'Audit',
        Icon: 'Test'
        //Action: this.actionOne.bind(this) // we need to make sure this is scoped correctly
    };
    HistroyButton: IButton =
    {
        Name: 'Histroy',
        Icon: 'Test'
        //Action: this.actionOne.bind(this) // we need to make sure this is scoped correctly
    };
    fileuploadComponent: Type<any>;
    auditComponent: Type<any>;
    historyComponent: Type<any>;
    constructor() {
        this.fileuploadComponent = FileUploadComponent;
        this.auditComponent = AduitComponent;
        this.historyComponent = HistoryComponent;
    }
}
