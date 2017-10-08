import { LoginService } from '../login/login.service';
import { StudentService } from './student.service';
import { HttpClient } from '@angular/common/http';

export function studentFactory(loginService: LoginService, http: HttpClient) {
    return new StudentService(loginService.isLoggedIn, http);
}

export let StudentServiceFactory = {
    provide: StudentService,
    useFactory: studentFactory,
    deps: [LoginService, HttpClient]
}

