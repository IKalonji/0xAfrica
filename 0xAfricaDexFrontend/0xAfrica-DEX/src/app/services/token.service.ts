import { Injectable } from '@angular/core';
import { BNBTokens,TRONTokens,FANTOMTokens,POLYGONTokens, Token } from '../models/Token.model';
import { ethers } from 'ethers';
import * as dexABI from './contractABI/DEX.ABI.json';
import * as tokenABI from './contractABI/TOKEN.ABI.json';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private tokens: Token[] = [];

  dexContract:any;
  tokenContract:any;
  
  constructor() {}

  getTokens(chain:string){
    switch (chain){
      case "Binance Smart Chain":
        this.tokens = BNBTokens;
        break
      case "Fantom":
        this.tokens = FANTOMTokens;
        break
      case "Polygon":
        this.tokens = POLYGONTokens;
        break
      case "Tron":
        this.tokens = TRONTokens;
        break
    }
    return this.tokens;
  }

  async getRate(address: string, tokenName: string){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const contract: any  = new ethers.Contract(address, dexABI, signer);
    const rate = await contract.getExchangeRate(tokenName);
    return rate;
  }

  async executeSwap(address: string, tokenName: string, amount:number){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const contract: any  = new ethers.Contract(address, dexABI, signer);
    const tx = await contract.swapToken(tokenName, {value: ethers.utils.parseEther(amount.toString())});
    tx.wait();
    return true;
  }

}