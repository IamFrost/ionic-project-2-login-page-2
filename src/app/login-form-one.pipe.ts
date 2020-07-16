import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginFormOne'
})
export class LoginFormOnePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
