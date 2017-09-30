import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

export function PasswordValidator(control: FormControl): Observable<any> {
    if (control.value.length <= 6 ) {
        console.log(control.value.length);
        let result = { paaswordValid: true };
        return Observable.of(result);
    } else {
        return null;
    }
}
