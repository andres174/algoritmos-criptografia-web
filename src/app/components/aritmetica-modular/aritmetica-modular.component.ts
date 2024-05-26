import { Component } from '@angular/core';

@Component({
  selector: 'app-aritmetica-modular',
  templateUrl: './aritmetica-modular.component.html',
  styleUrls: ['./aritmetica-modular.component.css']
})
export class AritmeticaModularComponent {

  a: number = 0
  n: number = 0
  result: number = 0

  r1: string = 'a<0  && |a| < |n| = a mod n = a + n'
  r2: string = 'a<0  && |a| > |n| = a mod n = n - |a| mod |n|'
  r3: string = 'n > a > 0 = a mod n = a'


  calcular(){

    if (this.a < 0) {
      if (Math.abs(this.a) < Math.abs(this.n)){
        this.result = Number(this.a) + Number(this.n)
      } else {
        this.result = this.n - (Math.abs(this.a) % Math.abs(this.n))
      }
    } else if((this.n > this.a) && (this.a > 0)){
      this.result = this.a
    } else {
      this.result = this.a % this.n
    }
  }

  reset(){
    this.a = 0
    this.n = 0
    this.result = 0
  }

}
