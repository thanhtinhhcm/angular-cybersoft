import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class DeActiveGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(component: SignupComponent): boolean {
    const flag = component.isSubmittedForm();
    if(flag){
      return true;
    }
    const confirmed =  window.confirm('Ban co chac thoat khong?')
    return confirmed ? true : false;
  }

}
