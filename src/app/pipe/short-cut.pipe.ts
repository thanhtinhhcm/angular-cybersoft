import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortCut'
})
export class ShortCutPipe implements PipeTransform {

  transform(values: string): any {
    if(values.length > 70){
      return values.substr(0,70) + "...";
    } else return values
  }

}
