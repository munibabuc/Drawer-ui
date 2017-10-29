import { Component, OnInit,Input,Type } from '@angular/core';
import {DrawerService } from './drawer.service';
import {IButton} from './IButton';
@Component({
    selector: 'd-button',
    template: `
      <button type="button" id="btntoggle" class="btn btn-default" (click)="togglePanel()" >
      <i class="icons glyphicon-glyphicon-file" aria-hidden="true" ></i>
      {{buttonInput.Name}}  </button>
    `
  })
  export class ButtonComponent implements OnInit {

    @Input()
    buttonInput: IButton;

    @Input()
    componentType:Type<any>;

    constructor(private ds:DrawerService)
    {
    }
    ngOnInit()
    {
        console.log(this.buttonInput);
    }
    togglePanel()
    {
        console.log('drawer opener button clicked');
        this.ds.toggleDrawerOpener(this.componentType);
    }
  }