import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): string {

    if(activar){
      let salida:string = "";

      //Por cada letra que se encuentre en salida
      for( let i=0; i< value.length; i++){
        //Se concatena en salida un *
        salida += "*";
      }
      return salida;
    }else{
      return value;
    }

    return null;
  }

}
