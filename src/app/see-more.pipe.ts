import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overview: string, cuttingNumber: number): unknown {
    return overview.split(" ").slice(0, cuttingNumber).join(" ");
  }

}
