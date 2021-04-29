import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{

    transform(value: any){
        let espar:string = "no es par";
        if (value%2 == 0) {
            espar = "es par"          
        }

        return espar;
    }
}