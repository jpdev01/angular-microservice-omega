import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let formatDatabase = "YYYY-MM-DDTHH:mm:ss";
    let dateOut: moment.Moment = moment(date, formatDatabase);

    let expectedFormat = "DD-MM-YYYY HH:mm"
    return dateOut.format(expectedFormat);
  }

}
