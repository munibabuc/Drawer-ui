import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { AppComponent } from './app.component';
import { ButtonComponent } from './directives/drawer/drawer-button.component';
import { DrawerService } from './directives/drawer/drawer.service';
import { ParentComponent } from './parent.component';
import{ DrawerComponent } from './directives/drawer/drawer.component';
import {FileUploadComponent } from './directives/fileupload/fileupload.component';
import { AduitComponent } from './directives/Audit/audit.component';
import { HistoryComponent } from './directives/History/history.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ParentComponent,
    DrawerComponent,
    FileUploadComponent,
    AduitComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule
  ],
  entryComponents:[FileUploadComponent,AduitComponent,HistoryComponent],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
