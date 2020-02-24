var SmartInvoice = artifacts.require("SmartInvoice");

module.exports = function(deployer) {
	// gave the paramenters here
	deployer.deploy(SmartInvoice,1000000).then(function () {
		//token price in ether
		var tokenPrice = 100000000000000;
		return deployer.deploy(tokenPrice);
	});
}
