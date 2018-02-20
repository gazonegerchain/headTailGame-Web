import web3 from "./web3";

const address = "0x6509D0055e40A6266EB8d0288eA560FCCD129EE2";

const abi = [
	{
		constant: true,
		inputs: [],
		name: "tail",
		outputs: [
			{ name: "account", type: "address" },
			{ name: "deposit", type: "uint256" }
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [],
		name: "enterHead",
		outputs: [],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		constant: false,
		inputs: [],
		name: "pickWinner",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "head",
		outputs: [
			{ name: "account", type: "address" },
			{ name: "deposit", type: "uint256" }
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "dealer",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [],
		name: "enterTail",
		outputs: [],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	}
];

export default new web3.eth.Contract(abi, address);
