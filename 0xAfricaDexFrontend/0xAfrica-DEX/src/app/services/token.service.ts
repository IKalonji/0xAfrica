import { Injectable } from '@angular/core';
import { dummyTokens, Token } from '../models/Token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private tokens: Token[] = [];
  
  constructor() { }

  getTokens(){
    this.tokens = dummyTokens;
    return this.tokens;
  }
  
}
