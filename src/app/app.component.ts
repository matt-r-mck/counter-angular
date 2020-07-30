import { Component, ɵisListLikeIterable  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: number = 0;

  nbrCls: string = "";

display(): void{
  this.nbrCls = "";
  if(this.counter % 2 == 0){
    this.nbrCls+="text-danger ";
  }if(this.counter % 3 == 0){
    this.nbrCls+="font-weight-bold ";
  }if(this.counter % 5 == 0){
    this.nbrCls+="font-italic ";
  }
}

  increment (){
    ++this.counter;
    this.display();
  }
  decrement (){
    --this.counter;
    this.display();
  }

  title = 'counter-angular';
}
