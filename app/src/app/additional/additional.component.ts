import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-additional', //html-тег для использования компоненты
  templateUrl: './additional.component.html',

  //changeDetection: ChangeDetectionStrategy.Default, //страгеия отслеживания изменений, всегда стоит дефолт, ангуляр сам думает

  //template: "<div>hello</div>", //тут можем прописывать сам html-код
  //styleUrls: [''], //стили,файлов стилей может быть много, но шаблон всегда один
  //providers: [], //сервисы

  //standalone: true, //это нужно что бы компонента могла импортировать через саму себя, а не через модули, но в модулях все равно надо зарегистрировать этот компонент
  //если standalone: true, то этот компонент не будет иметь доступа к импортам модуля, для этого используеться
  //imports: [],

  // animations: //для анимации
})

export class AdditionalComponent implements OnInit{
  @Input() public catName!:string; //принимаем данные,тпереь catName это атрибут(или свойство) компонента AdditionalComponent

  @Output() public iEvent: EventEmitter<string> = new EventEmitter();
  @Output() public iEventClickCatsName: EventEmitter<string> = new EventEmitter();

  //дата бандинг
  //пример, принимаем данные от основного компонента, изменяем их в дочернем, и возврашаем измененные данные обратно в основной элемент
  @Input()  public dataBanding!:string;
  @Output() public dataBandingChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.iEvent.next('Юс');
  }
  //передаем информацию о событии, и уже в основном компоненте обрабатываем событие
  public handleClickCatsName():void {
    this.iEventClickCatsName.next(this.catName)
  }

  public handleDataBandingChange():void{
    this.dataBanding += 'А';
    this.dataBandingChange.next(this.dataBanding);
  }


}
