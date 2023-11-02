import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {RequestService} from "../services/request/request.service";
import {catchError, finalize, throwError} from "rxjs";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {SessionService} from "../services/session/session.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private translate: TranslateService, private session: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const noTokenNeededUrls = ['auth']; // lista di URL che non richiedono il token
    const url = req.url.toLowerCase(); // ottieni l'URL della richiesta corrente in minuscolo
    const authToken = this.session.getAuthToken()?.access_token
    let authReq = req.clone();
    if (authToken && !noTokenNeededUrls.some(u => url.includes(u)) ) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
          'Api-key': '!!*_VIZE_ADMIN_SECRET_COMPANY_API_TOKEN_1618*_!!',
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let messageError = ''
        if (error.status === 502){
          return throwError(this.translate.instant('ERROR.BAD_GATEWAY'));
        }else {
          if (error.error.detail){
            messageError = this.translate.instant('ERROR.' + error.error.detail.toUpperCase())
          }else {
            messageError = error.error
          }
        }
        return throwError(messageError);
      })
    );

  }
}
