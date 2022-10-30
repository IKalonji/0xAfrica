import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Token } from '../models/Token.model';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.css']
})
export class DexComponent implements OnInit {

  walletConnected: boolean = false;
  walletAddress: string = "";
  Tokens: Token[] = []

  selectedFromToken: string = "";
  selectedToToken:string = "";

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.Tokens = this.tokenService.getTokens();
   }

  connectWallet() {
    throw new Error('Method not implemented.');
  }

  swapTokens(){
    console.log(this.selectedFromToken, this.selectedToToken);
  }

}
