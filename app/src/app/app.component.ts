import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  //модификаторы доступа: public, protected и private, protected-обозначает что доступ из вне только для наследников
  protected arr = [1,2,3];
  protected name = 'Соня';
  protected kidName = '';
  protected arrCatsName = ['Соня','Ася','Кевин','Чипса']
  protected clicCatsName ='';
  protected dataBand = 'крик души а'

  protected handelIEvent(e:string):void {
    this.kidName = e;
  }

  protected handelClicCatsName(e:string) {
    this.clicCatsName = e;
  }

}
