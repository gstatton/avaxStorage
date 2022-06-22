import React from 'react';
import Web3 from 'web3'
import TruffleContract from '@truffle/contract';

const Web3 = require('web3');

export class GetWeb3 extends React.Component {
    async getWeb3() {
        let web3 = window.web3;

        if (typeof web3 !== 'undefined') {
            //Setup Web3 Provider
            this.web3Provider = web3.currentProvider;  
            this.web3 = new Web3(web3.currentProvider);  
            return this.web3;
        }else{  
            this.isWeb3 = false;  
        }
    }
}

export class GetContract extends React.Component {
    async getContract(web3, contractJson) {
        //Setup Contract
        this.contract = await TruffleContract(contractJson);
        this.contract.setProvider(web3.currentProvider);
        return await this.contract.deployed();
    }
}

export class GetAccount extends React.Component {
    async getAccount(web3) {
        // return await web3.eth.getAccounts();
        return await web3.eth.requestAccounts().then(console.log);
    }
}

const loginToWallet = async () => {
    if (typeof window.web3 !== 'undefined') {
        console.log('MetaMask is installed!');
        const accounts = await web3.eth.requestAccounts().then(console.log);
    } else {
        return false;
    }

}