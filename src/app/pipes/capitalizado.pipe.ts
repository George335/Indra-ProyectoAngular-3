import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

    transform(value: string, todas: boolean = true): string {

        //Los nombres los convierte a minúsculas
        value = value.toLowerCase();

        //Separación
        let nombres = value.split(" ");

        if (todas) {
            //Recorro la palabra
            for (let i in nombres) {
                //El primer nombre= a la primera letra de esa palabra, lo concatena con lo que sigue de la palabra nombres de la primera posición
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }else{
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }





        return nombres.join(" ");
    }

}

