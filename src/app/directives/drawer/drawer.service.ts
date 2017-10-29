import { Injectable,Type } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable()
export class DrawerService {
private showPanel=new Subject<Type<any>>();
toggleOpener$=this.showPanel.asObservable();
constructor()
{

}
toggleDrawerOpener(componentType:Type<any>)
{
    this.showPanel.next(componentType);
}
}
