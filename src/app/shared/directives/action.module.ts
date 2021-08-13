import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionDirective } from './action.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ActionDirective],
  exports: [ActionDirective]
})
export class ActionDirectiveModule {

}
