import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItems'
})
export class SearchItemsPipe implements PipeTransform {

  transform(movies: any[], searchItem: string): any[] {
    return movies.filter((ele) => ele.title.toLowerCase().startsWith(searchItem.toLowerCase()));
  }

}
