import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(AuthService);

        if (loginService.userAuthenticated()) {
            const authRequest = request.clone(
                { setHeaders: { 'Authorization': `Bearer ${loginService.get()}` } }
            );
            return next.handle(authRequest);
        } else {
            return next.handle(request);
        }
    }
}