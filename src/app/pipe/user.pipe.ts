import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    let returnValue = "";
    if(value) {
      returnValue = "Administrator";
    }
    else {
      returnValue = "Local User"
    }
    return returnValue;
  }

}

@Pipe({
  name: 'onlineStatus'
})
export class OnlineStatusPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    let returnValue = "";
    if(value) {
      returnValue = "Online";
    }
    else {
      returnValue = "Offline"
    }
    return returnValue;
  }

}
