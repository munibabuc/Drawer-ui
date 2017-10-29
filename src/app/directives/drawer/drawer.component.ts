import { Component, OnInit,
    trigger,state,animate,style,transition,
    ComponentFactoryResolver,
    ChangeDetectorRef,
    Input,
    Output,
    EventEmitter,
    AfterViewInit,
    ViewChild,
    ViewContainerRef,Type } from '@angular/core';
import { DrawerService } from './drawer.service';
import { Observable, Subscription } from 'rxjs'
@Component({
    selector: 'drawer',
    templateUrl: './drawer.component.html',
    animations:[
        trigger('showpanel',[
            state('in',style({height:'*'})),
            transition(':enter',[
                style({height:'0'}),
                animate(550,style({height:'100%'}))
            ]),
            transition(':leave',[
                animate(550,style({height:0}))
            ])
        ])
    ]
})
export class DrawerComponent implements OnInit,AfterViewInit {
    component:Type<any>;
    private contentPlaceholder: ViewContainerRef;
    
     @ViewChild('vc', {read: ViewContainerRef}) set content(content: ViewContainerRef) {
        this.contentPlaceholder = content;
     }
    //@ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    private drawerOpener: boolean = false;
    private showDrawerSubscription: Subscription;
    constructor(private d: DrawerService,
        private ref:ViewContainerRef,
        private cd:ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver) {

    }
    ngOnInit() {
        // this.showDrawerSubscription = this.d.toggleOpener$.subscribe(() => {
        //     this.drawerOpener = !this.drawerOpener;
        // });
    }
    ngAfterViewInit() {
        this.showDrawerSubscription = this.d.toggleOpener$.subscribe(res => {
            console.log(res);
            if(res==this.component)
                this.drawerOpener =false;
            else{
                this.drawerOpener=true;
            }
           // this.drawerOpener = !this.drawerOpener;
            this.component=res;
            this.cd.detectChanges();
            if (this.drawerOpener) {
                this.loadChildComponent();
            }
        });
            
      }
    loadChildComponent() {
        console.log('Child component is started loading...');
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.contentPlaceholder.clear();
        const componentRef = this.contentPlaceholder.createComponent(componentFactory);
        componentRef.changeDetectorRef.detectChanges();
        console.log('Child component loading completed...');
    }
    ngOnDestroy()
    {
        this.contentPlaceholder.clear();
        this.showDrawerSubscription.unsubscribe();
    }
}