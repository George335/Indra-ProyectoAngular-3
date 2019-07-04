import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "Fernando";
  nombre2 = "figo ronalDO ADriano cafu";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolwerine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  };

  varlorDePromesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=>resolve('Llegó la data!'), 3500 );
  } )

  fecha = new Date();

  video: "_jCBfm2OI7Q";

  activar:boolean = true;



}
