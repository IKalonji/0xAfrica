import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Token } from '../models/Token.model';
import { TokenService } from '../services/token.service';

import { chains, IChains } from '../models/Chains.model';
import { zip } from 'rxjs';


@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.css']
})
export class DexComponent implements OnInit {

  walletConnected: boolean = false;
  walletAddress: string = "";
  Tokens: Token[] = []

  _fromAmount: Number = 1000;
  _toAmount: Number = 0;

  selectedFromToken: string = "";
  selectedToToken:string = "";

  canSwap:boolean = false;

  chainSelected: boolean = false;
  chain: any;
  CHAINS: any = [];

  constructor(private tokenService: TokenService, private confirmationService:ConfirmationService) { 

  }

  ngOnInit(): void {
    this.CHAINS = chains
  }

  async connectWallet() {
    this.confirmationService.confirm({
      header: "Connect wallet to proceed!",
      message: "Please make sure you connect to the correct chain",
      accept: async () => {
        if(this.chain.name == "Tron"){
          if (window.tronWeb && window.tronWeb.defaultAddress.base58){
            this.walletAddress = window.tronWeb.defaultAddress.base58;
            this.walletConnected = true;
            console.log("Default Address: ", this.walletAddress);
          }else{
            this.confirmationService.confirm({
              message: "In order for the 0xAfrica DEX to connect to you wallet you need to have signed into TronLink. Please open you TronLink Wallet Extension and sign in, then try connecting your wallet again.",
              accept: () => {},
              acceptLabel: "Ok",
              acceptIcon: "pi pi-thumbs-up",
              dismissableMask: false,
              rejectVisible: false,
              closeOnEscape: false,
            })
          }
        }else {
          if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err:any) => {
              if (err.code === 4001){
                this.confirmationService.confirm({
                  header: "Connect wallet to proceed!",
                  message: "You need to connect your wallet to use the DEX",
                  accept: () => {},
                  acceptLabel: "OK",
                  acceptIcon: "pi pi-thumbs-up",
                  dismissableMask: false,
                  rejectVisible: false,
                  closeOnEscape: false,
                })
              }
            });
            this.walletAddress = accounts[0];
            console.log(this.walletAddress);
            this.walletConnected = true;
          }
        }
      },
      acceptLabel: "OK",
      acceptIcon: "pi pi-thumbs-up",
      dismissableMask: false,
      rejectVisible: false,
      closeOnEscape: false,
    })
    
  }

  continueToSwap(){
    console.log(this.chain)
    if (this.chain != ""){
      this.chainSelected = true;
      this.Tokens = this.tokenService.getTokens(this.chain.name);
    }
  }

  calculateSwap(){
    console.log("Logging selected from token: ", this.selectedFromToken);
    console.log("Logging selected to token: ", this.selectedToToken);
    console.log("Logging base token amount: ", this._fromAmount);
    if(this.selectedFromToken == this.selectedToToken){
      console.log("Logging to and from are the same");
      this.confirmationService.confirm({
        header: "Invalid swappp!",
        message: "You cannot swappp to and from the same token. Kindly select a  different token than the one you intend on swappping.",
        accept: () => {},
        acceptLabel: "OK",
        acceptIcon: "pi pi-thumbs-up",
        dismissableMask: false,
        rejectVisible: false,
        closeOnEscape: false,
      })
    }
    else {
      this.canSwap = true;
    }
  }

  async swapTokens(){
    if (this.walletConnected){
      let tronweb = window.tronWeb;
      let transaction = await tronweb.transactionBuilder.sendTrx('TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 10, this.walletAddress)
      let signedTx = await tronweb.trx.sign(transaction);
      let boast = await tronweb.trx.sendRawTransaction(signedTx);
      console.log("Logging transaction complete")
    }
    else{
      this.confirmationService.confirm({
        message: "In order for the 0xAfrica DEX to connect to you wallet you need to have signed into TronLink. Please open you TronLink Wallet Extension and sign in, then try connecting your wallet again.",
        accept: () => {},
        acceptLabel: "Ok",
        acceptIcon: "pi pi-thumbs-up",
        dismissableMask: false,
        rejectVisible: false,
        closeOnEscape: false,
      })
    }
  }

}
