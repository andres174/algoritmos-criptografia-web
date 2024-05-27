import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extendido-euclides',
  templateUrl: './extendido-euclides.component.html',
  styleUrls: ['./extendido-euclides.component.css']
})
export class ExtendidoEuclidesComponent implements OnInit{

  tablero: number[][] = []

  a: number = 0
  b: number = 0
  //si: number = 0
  x: number = 0

  ngOnInit(): void {
    /* this.initAlgoritmo() */
  }

  initAlgoritmo(): void {

    if (this.tablero.length > 1) {
      return
    }
    
    let row0 = [0, this.b, 1, 0]
    let row1 = [0, this.a, 0, 1]
    this.tablero.push(row0)
    this.tablero.push(row1)
    console.log(this.tablero)
    this.extendidoEuclides()

  }

  extendidoEuclides() {
    let i: number = 1
    
    while (this.tablero[i][1] !== 0) {
      let y: number = Math.floor(this.tablero[i - 1][1] / this.tablero[i][1])
      let g: number = this.tablero[i - 1][1] - y * this.tablero[i][1]
      let u: number = this.tablero[i - 1][2] - y * this.tablero[i][2]
      let v: number = this.tablero[i - 1][3] - y * this.tablero[i][3]
      this.tablero.push([y, g, u, v])
      i = i + 1 
    }
    if (this.tablero[i-1][3] < 0) {
      this.tablero[i-1][3] = Number(this.tablero[i-1][3]) + Number(this.b)
     // this.si = this.tablero[i-1][3]
    }
    this.x = this.tablero[i-1][3]
  }

  reset(){
    this.tablero = []
    this.a = 0
    this.b = 0
   // this.si = 0
    this.x = 0
  }


}
