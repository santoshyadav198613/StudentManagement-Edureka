import { LoginService } from '../login/login.service';
import { StudentService } from './student.service';

export function studentFactory(loginService: LoginService) {
    return new StudentService(loginService.isLoggedIn);
}

export let StudentServiceFactory = {
    provide: StudentService,
    useFactory: studentFactory,
    deps: [LoginService]
}

