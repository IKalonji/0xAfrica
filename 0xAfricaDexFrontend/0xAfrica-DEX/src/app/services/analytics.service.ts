import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  COVALENT_KEY = environment.covalent;
  MORALIS_KEY = environment.moralis;

  constructor(private http: HttpClient) { }

  dexLiquidityOverTimeCovalent(chainID: string, contractAddress: string){
    const endpoint: string = `https://api.covalenthq.com/v1/${chainID}/address/${contractAddress}/portfolio_v2/?key=${this.COVALENT_KEY}`;
    return this.http.get(endpoint, {headers: {"Accept":"application/json"}});
  }

  dexTransactionsCovalent(chainID: string, contractAddress: string){
    const endpoint: string = `https://api.covalenthq.com/v1/${chainID}/address/${contractAddress}/transactions_v2/?key=${this.COVALENT_KEY}`;
    return this.http.get(endpoint, {headers: {"Accept":"application/json"}});
  }

  stablecoinBalanceByContractAddressMoralis(chaidIDHex: string, walletAddress: string, tokenAddress: string[]){
    
    const endpoint: string = `https://deep-index.moralis.io/api/v2/${walletAddress}/erc20?chain=${chaidIDHex}&token_addresses=${tokenAddress}`;
    return this.http.get(endpoint, {headers: {"Accept":"application/json", "X-API-Key": this.MORALIS_KEY}});
  }

  stablecoinContractTransactionsByAddressMoralis(tokenAddress: string, chainIDHex: string){
    const endpoint: string = `https://deep-index.moralis.io/api/v2/erc20/${tokenAddress}/transfers?chain=${chainIDHex}`;
    return this.http.get(endpoint, {headers: {"Accept":"application/json", "X-API-Key": this.MORALIS_KEY}});
  }

  stablecoinContractMetadataByAddressMoralis(tokenAddress: string, chainIDHex: string){
    const endpoint: string = `https://deep-index.moralis.io/api/v2/erc20/metadata?chain=${chainIDHex}&addresses=${tokenAddress}`;
    return this.http.get(endpoint, {headers: {"Accept":"application/json", "X-API-Key": this.MORALIS_KEY}});
  }

  dexProofOfReserveByAddressMoralis(dexContractAddress:string, chainIDHex: string){
    const endpoint: string = `https://deep-index.moralis.io/api/v2/${dexContractAddress}/balance?chain=${chainIDHex}`;
    return this.http.get(endpoint, {headers: {"Accept":"application/json", "X-API-Key": this.MORALIS_KEY}});
  }

}
