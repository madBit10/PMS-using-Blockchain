var plantMonitor = artifacts.require("./plantMonitor.sol");

module.exports = function (deployer) {
  deployer.deploy(plantMonitor);
}