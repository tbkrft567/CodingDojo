import { Injectable } from '@angular/core'

@Injectable()

export class localFunction {

   constructor() { }
 
   matchPassword(password: string, passwordConf: string): boolean{
      if(password == passwordConf){
         return true
      }
      else{
         return false
      }
   }

}