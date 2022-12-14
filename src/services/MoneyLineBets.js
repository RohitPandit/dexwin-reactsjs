const popluarabi = require("./ABI.json");
const erc20abi = require("./erc20.json");
const Web3 = require('web3');
//const ethers = require("ethers");
const privtekey = "1941513d63965c36deed9900ac8449315645848df2a5eea731ec590f14d005fa";
const contractAddress = "0x895d947674Db8819Db32A1eb6510A0febDbf22b6";//"0xd3b3f6540704e0e1bc42204250a8c29a584324a8";
const erc20addresss = "0x99359c6e0c3a749f6c408a8c7985c28df30bc604";
const url = 'https://wandering-sparkling-ensemble.matic-testnet.discover.quiknode.pro/ba4696ce9640d389c8492143fe155d61ac971f31/';
let web3;
let web3New = new Web3(
	window.ethereum
	//url
);
let sigUtil = require("eth-sig-util");
const { Biconomy } = require("@biconomy/mexa");
const Contract = {
	address: "0x94c0104e7a296efde81cb69e2a5295a675e594b8",
	//"0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6",
	abi: [
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "userAddress",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "functionSignature",
					"type": "bytes"
				},
				{
					"internalType": "bytes32",
					"name": "sigR",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "sigS",
					"type": "bytes32"
				},
				{
					"internalType": "uint8",
					"name": "sigV",
					"type": "uint8"
				}
			],
			"name": "executeMetaTransaction",
			"outputs": [
				{
					"internalType": "bytes",
					"name": "",
					"type": "bytes"
				}
			],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "string",
					"name": "newQuote",
					"type": "string"
				}
			],
			"name": "setQuote",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "a",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferer20",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_token",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "userAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address payable",
					"name": "relayerAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bytes",
					"name": "functionSignature",
					"type": "bytes"
				}
			],
			"name": "MetaTransactionExecuted",
			"type": "event"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "userAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfertouser",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "user",
					"type": "address"
				}
			],
			"name": "getNonce",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getQuote",
			"outputs": [
				{
					"internalType": "string",
					"name": "currentQuote",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "currentOwner",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "quote",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]
}

const domainType = [
	{ name: "name", type: "string" },
	{ name: "version", type: "string" },
	{ name: "chainId", type: "uint256" },
	{ name: "verifyingContract", type: "address" }
];

const metaTransactionType = [
	{ name: "nonce", type: "uint256" },
	{ name: "from", type: "address" },
	{ name: "functionSignature", type: "bytes" }
];

let domainData = {
	name: "TestContract",
	version: "1",
	verifyingContract: Contract.address
};

var selectedAddress = "";

var metaTxEnabled = true;
let contract1;
let transactionHash;


// Initialize Biconomy
export async function initBiconomy() {
	if (
		typeof window.ethereum !== "undefined" &&
		window.ethereum.isMetaMask
	) {
		// Ethereum user detected. You can now use the provider.
		const provider = window["ethereum"];
		await provider.enable();
		if (provider.networkVersion == "80001") {
			domainData.chainId = 80001;
			const biconomy = new Biconomy(provider, {
				apiKey: "O3-IjZClP.ce1ab5be-6f1d-4355-a450-f6a553818f12"//"MublK0H-b.864389b3-e421-4ddb-b56b-e5a1bca3e109"
				,
				debug: true
			});
			web3 = new Web3(biconomy);

			biconomy.onEvent(biconomy.READY, () => {
				// Initialize your dapp here like getting user accounts etc
				contract1 = new web3.eth.Contract(
					Contract.abi,
					Contract.address
				);
				selectedAddress = provider.selectedAddress;
				// getQuoteFromNetwork();
				provider.on("accountsChanged", function (accounts) {
					selectedAddress = accounts[0];
				});
			}).onEvent(biconomy.ERROR, (error, message) => {
				// Handle error while initializing mexa
			});
			onBiconomy();
		} else {
			console.log({ status: "error", message: "Please change the network in metamask to Mumbai Testnet" });
		}
	} else {
		console.log({ status: "error", message: "Metamask not installed" });
	}
}



const onBiconomy = async (amount) => {
	if (contract1) {
		transactionHash = "";
		if (metaTxEnabled) {
			console.log("Sending meta transaction");
			let userAddress = selectedAddress;
			let nonce = await contract1.methods.getNonce(userAddress).call();
			let functionSignature = contract1.methods.transferer20("0x94c0104e7a296efde81cb69e2a5295a675e594b8", amount).encodeABI();
			//let functionSignature = contract.methods.placebet("1","1","324","0","moneyline","278").encodeABI();
			let message = {};
			message.nonce = parseInt(nonce);
			message.from = userAddress;
			message.functionSignature = functionSignature;

			const dataToSign = JSON.stringify({
				types: {
					EIP712Domain: domainType,
					MetaTransaction: metaTransactionType
				},
				domain: domainData,
				primaryType: "MetaTransaction",
				message: message
			});
			console.log(domainData);
			console.log();
			web3.currentProvider.send(
				{
					jsonrpc: "2.0",
					id: 999999999999,
					method: "eth_signTypedData_v4",
					params: [userAddress, dataToSign]
				},
				function (error, response) {
					console.info(`User signature is ${response.result}`);
					if (error || (response && response.error)) {
						console.log({ status: "error", message: "Could not get user signature" });
					} else if (response && response.result) {
						let { r, s, v } = getSignatureParameters(response.result);
						console.log(userAddress);
						console.log(JSON.stringify(message));
						console.log(message);
						console.log(getSignatureParameters(response.result));

						// const recovered = sigUtil.recoverTypedSignature_v4({
						//   data: JSON.parse(dataToSign),
						//   sig: response.result
						// });
						// console.log(`Recovered ${recovered}`);
						return sendSignedTransaction(userAddress, functionSignature, r, s, v);
					}
				}
			);
		} else {
			console.log("Sending normal transaction");
			contract1.methods
				.transferer20("0x94c0104e7a296efde81cb69e2a5295a675e594b8", "1")
				.send({ from: selectedAddress })
				.on("transactionHash", function (hash) {
					console.log({ status: "info", message: `Transaction sent to blockchain with hash ${hash}` });
				})
				.once("confirmation", function (confirmationNumber, receipt) {
					var transactionHash = receipt.transactionHash;
					console.log({ status: "success", message: "Transaction confirmed" });
				});
		}
	} else {
		console.log({ status: "error", message: "Please enter the quote" });
	}
};

const onBiconomy1 = async (address,amount) => {
	if (contract1) {
		transactionHash = "";
		if (metaTxEnabled) {
			console.log("Sending meta transaction");
			let userAddress = selectedAddress;
			let nonce = await contract1.methods.getNonce(userAddress).call();
			let functionSignature = contract1.methods.transfertouser(
				address,
				//"0x94c0104e7a296efde81cb69e2a5295a675e594b8", 
				amount
				).encodeABI();
			//let functionSignature = contract.methods.placebet("1","1","324","0","moneyline","278").encodeABI();
			let message = {};
			message.nonce = parseInt(nonce);
			message.from = userAddress;
			message.functionSignature = functionSignature;

			const dataToSign = JSON.stringify({
				types: {
					EIP712Domain: domainType,
					MetaTransaction: metaTransactionType
				},
				domain: domainData,
				primaryType: "MetaTransaction",
				message: message
			});
			console.log(domainData);
			console.log();
			web3.currentProvider.send(
				{
					jsonrpc: "2.0",
					id: 999999999999,
					method: "eth_signTypedData_v4",
					params: [userAddress, dataToSign]
				},
				function (error, response) {
					console.info(`User signature is ${response.result}`);
					if (error || (response && response.error)) {
						console.log({ status: "error", message: "Could not get user signature" });
					} else if (response && response.result) {
						let { r, s, v } = getSignatureParameters(response.result);
						console.log(userAddress);
						console.log(JSON.stringify(message));
						console.log(message);
						console.log(getSignatureParameters(response.result));

						// const recovered = sigUtil.recoverTypedSignature_v4({
						//   data: JSON.parse(dataToSign),
						//   sig: response.result
						// });
						// console.log(`Recovered ${recovered}`);
						return sendSignedTransaction(userAddress, functionSignature, r, s, v);
					}
				}
			);
		} else {
			console.log("Sending normal transaction");
			contract1.methods
				.transferer20("0x94c0104e7a296efde81cb69e2a5295a675e594b8", "1")
				.send({ from: selectedAddress })
				.on("transactionHash", function (hash) {
					console.log({ status: "info", message: `Transaction sent to blockchain with hash ${hash}` });
				})
				.once("confirmation", function (confirmationNumber, receipt) {
					var transactionHash = receipt.transactionHash;
					console.log({ status: "success", message: "Transaction confirmed" });
				});
		}
	} else {
		console.log({ status: "error", message: "Please enter the quote" });
	}
};

const sendSignedTransaction = async (userAddress, functionData, r, s, v) => {
	if (web3 && contract1) {
		try {
			let gasLimit = await contract1.methods
				.executeMetaTransaction(userAddress, functionData, r, s, v)
				.estimateGas({ from: userAddress });
			let gasPrice = await web3.eth.getGasPrice();
			console.log(gasLimit);
			console.log(gasPrice);
			let tx = contract1.methods
				.executeMetaTransaction(userAddress, functionData, r, s, v)
				.send({
					from: userAddress,
					gasPrice: gasPrice,
					gasLimit: gasLimit
				});

			tx.on("transactionHash", function (hash) {
				console.log(`Transaction hash is ${hash}`);
				console.log({ status: "info", message: `Transaction sent by relayer with hash ${hash}` });
			}).once("confirmation", function (confirmationNumber, receipt) {
				console.log(receipt);
				transactionHash = receipt.transactionHash;
				console.log({ status: "success", message: "Transaction confirmed on chain" });
				return { status: "success", message: "Transaction confirmed on chain", hash: transactionHash };
				// getQuoteFromNetwork();
			});
		} catch (error) {
			console.log(error);
		}
	}
};

const getSignatureParameters = signature => {
	if (!web3.utils.isHexStrict(signature)) {
		throw new Error(
			'Given value "'.concat(signature, '" is not a valid hex string.')
		);
	}
	var r = signature.slice(0, 66);
	var s = "0x".concat(signature.slice(66, 130));
	var v = "0x".concat(signature.slice(130, 132));
	v = web3.utils.hexToNumber(v);
	if (![27, 28].includes(v)) v += 27;
	return {
		r: r,
		s: s,
		v: v
	};
};




// const account = web3.eth.accounts.wallet.add(privtekey);
//let contractAddress = "0x0c60447Ce83877C19c52B8E876D194D00f68b30e";
// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();
// const contract = new ethers.Contract(contractAddress, popluarabi, signer);
async function getAccount() {
	if (window.ethereum) {
		await window.ethereum.send('eth_requestAccounts');
		window.web3 = new Web3(window.ethereum);
		var accounts = await window.web3.eth.getAccounts()
		return accounts[0]
	} else {
		return "Not Connected"
	}
}

var contractNEW = new web3New.eth.Contract(popluarabi, contractAddress);
var ERC = new web3New.eth.Contract(erc20abi, erc20addresss);

const init = async (accounts) => {
	let initbla = await ERC.methods.balanceOf(accounts).call();
	console.log("balanceOf: ", initbla.toString());
}

const approve = async (amount, accounts) => {
	const appr1 = await ERC.methods.approve(contractAddress, amount).send({ from: accounts, gasLimit: 300000 })
	console.log("ERC approve: ", appr1);
}

initBiconomy();

export const orderplace = async () => {
	try {

		const accountsNew = await getAccount([0]);
		const chain_id = localStorage.getItem("chainID")
		const betslip = JSON.parse(localStorage.getItem("betslips"));
		const odds = Number(betslip[0].odds * 100).toFixed(0); //scaling factor
		const amount = Number(betslip[0].amount * 1e18).toFixed(0);
		const betType = Number(betslip[0].betType).toFixed(0);
		console.log("accountsNew: ", accountsNew);

		const biconomy = await onBiconomy(amount);
		console.log("orderplace <> biconomy :", biconomy);

		await init(accountsNew);
		await approve(amount, accountsNew);
		console.log("orderplace <> betslip: ", betslip);
		console.log(`orderplace <> odds: ${odds}. amount: ${amount}. betType: ${betType}. accountsNew: ${accountsNew}. chain_id: ${chain_id}`);

		const data = await contractNEW.methods.placebet(1, 1, amount, 0, betType, odds).encodeABI();
		const createTransaction = await web3New.eth.accounts.signTransaction(
			{
				from: accountsNew,
				to: contractAddress,
				data: data,
				gas: '500000'
			},
			privtekey // private key variable
		);
		const createReceipt = await web3New.eth.sendSignedTransaction(
			createTransaction.rawTransaction
		);
		console.log("orderplace <> createReceipt: ", createReceipt.transactionHash)


		// const createReceipt = await contractNEW.methods.placebet(1, 1, amount, 0, betType, odds).send({ from: accountsNew, gasLimit: 300000 });
		// console.log("orderplace <> createReceipt: ", createReceipt.transactionHash)
		// const createReceipt = await contract.methods.placebet(1, 1, amount, 0, betType, odds).send({ from: accounts1, gasLimit:300000 });
		// console.log("createReceipt: ", createReceipt.transactionHash)
		// let bal = await contract.methods.balanceOF().call();
		// console.log("balance of the contract after depositing ",bal.toString());
		// const userbal = await ERC.methods.balanceOf(account.address).call();
		// console.log("balance of the user after depositing ",userbal.toString());
		if (createReceipt) {
			return createReceipt
		} else {
			return false;
		}
	}
	catch (err) {
		console.log("err : " + err);
	}
}

export const claimBet = async (odds, amount) => {
	try {
		const accountsNew = await getAccount([0]);
		const biconomy = await onBiconomy1(accountsNew,amount);
		console.log("claimBet <> biconomy :", biconomy);

		console.log("odds: ", odds);
		console.log("amount: ", amount);
		const accounts1 = await getAccount([0]);


		// init(accounts1);
		// const createReceipt = await contractNEW.methods.claim((odds * 100), (amount
		// 	//*1e18
		// ))
		// 	.send({ from: accounts1, gasLimit: 300000 });
		// console.log("claimBet <> createReceipt: ", createReceipt.transactionHash);
		const data1 =await contractNEW.methods.claim((odds * 100), (amount
			//*1e18
			)).encodeABI();
		const createTransaction = await web3New.eth.accounts.signTransaction(
			{
				from: accountsNew,
				to: contractAddress,
				data: data1,
				gas: '500000'
			},
			privtekey // private key variable
		);
		const createReceipt = await web3New.eth.sendSignedTransaction(
			createTransaction.rawTransaction
		);
		console.log("orderplace <> createReceipt: ", createReceipt.transactionHash)




		if (createReceipt) {
			return createReceipt
		} else {
			return false;
		}
	} catch (err) {
		console.log("err : " + err);
		return false;
	}
}
