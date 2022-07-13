import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { user } from 'src/app/model/user.model';
import { PorfolioService } from '../porfolio.service';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:8080/user/';

  constructor(private http: HttpClient,private tokenService: TokenService, private datosPorfolio: PorfolioService) { }


  public getUser(): Observable<user> {
    if(this.tokenService.getAthorities().length != 0){
      return  this.http.get<user>(this.URL + 'traer/perfil');
    }else{
      return this.datosPorfolio.obtenerDatos();
    }
    
  }

}
