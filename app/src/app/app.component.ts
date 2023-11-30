import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'app';

  protected isOk=false;

  protected obj:any={
    one:1,
    two:2,
    say:"Иван",
  }

  ngAfterViewInit(): void {
    setTimeout(()=> this.isOk = true,2000)
  }
}
