import {Component} from '@angular/core';

@Component({
  selector: 'factorial-ui',
  template: `
    <div class="pad-4">
      <div class="row">
        <div class="col-3">
          <span>Enter a Number</span>
        </div>
        <div class="col-5">
          <input #n (keyup)="processFactorial(n,$event)" type="number" class="form-control"></div>
      </div>
      <div class="bg-light">
        <h1>
           {{ result | number}}
        </h1>
      </div>
    </div>
  `

})
export class FactorialComponent {
result = 200;

processFactorial ( v : HTMLInputElement, evt : KeyboardEvent)
{
  if(evt.keyCode == 13)
  {
   this.result  = this.getFactorial(parseInt(v.value));

  }



}

 getFactorial(n : number)
 {
   return n <= 1 ? 1 : n * this.getFactorial(n - 1);
 }

}
