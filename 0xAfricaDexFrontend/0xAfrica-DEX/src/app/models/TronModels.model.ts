export interface requestAccountsResponse{
    code: Number, // 200：ok 4000：in queue, no need to repeat commit， 4001：user rejected
    message: String
}

export interface sunWeb{}

export interface tronWeb{}

export interface tronLinkParams{
    ready: boolean; //Initialize to false, true after user authorization
    request: ()=>{};// The method of tuning plugins for dapp website
    sunWeb: sunWeb;
    tronWeb: tronWeb;
  }