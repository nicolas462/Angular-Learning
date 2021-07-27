import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist'
})
export class SearchArtistPipe implements PipeTransform {

  transform(_pipeData: any, _pipeModifier: any): any {
    return _pipeData.filter( (eachItem: any) => {
      return(
        eachItem['name'].toLowerCase().includes(_pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(_pipeModifier.toLowerCase())
      )
    });
  }

}
