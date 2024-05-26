import { Component } from '@angular/core';

@Component({
  selector: 'app-inverso-aditivo',
  templateUrl: './inverso-aditivo.component.html',
  styleUrls: ['./inverso-aditivo.component.css']
})
export class InversoAditivoComponent {

  result: number = 0
  a: number = 0
  b: number = 0

  calcular(){
    this.result = (Number(this.a) + Number(this.b))
    this.result = this.result % this.b
    debugger
    this.result = this.b - this.result
    debugger
  }

}
