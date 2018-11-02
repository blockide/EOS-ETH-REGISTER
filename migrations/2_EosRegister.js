const EosRegister = artifacts.require('./EosRegister.sol');

module.exports = function (deployer, _, accounts) {
    deployer.deploy(EosRegister);
};
