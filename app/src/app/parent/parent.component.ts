import { AfterContentInit, Component, ContentChild, ChangeDetectorRef, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector:'app-parent',
  templateUrl:'./parent.component.html',
})

export class ParentComponent implements OnInit , AfterViewInit, OnChanges, OnDestroy{
  @Input() public n!:string;
  //конструктор
  constructor(
    private router: Router,
  ){

  }
  //для отписок
  public ngOnDestroy(): void {

  }
  //для доступа к разметке
  public ngAfterViewInit(): void {

  }
  //после инициализации компонента
  public ngOnInit(): void {

  }
  //отслеживание изменений
  public ngOnChanges(changes: SimpleChanges):void{

  }

}
