const chai = require("chai")
chai.use(require("chai-as-promised"))

const MultiSigWallet = artifacts.require("MultiSigWallet")

contract("MultiSigWallet", accounts => {
    const owners = [accounts[0], accounts[1], accounts[2]]
    const NUMBER_OF_CONFIRMATIONS_REQUIRED = 2

    let wallet
    beforeEach(async () => {
        wallet = await MultiSigWallet.new(owners, NUMBER_OF_CONFIRMATIONS_REQUIRED)
    })

    // execute transaction test should pass
    it('should execute', async () => {

    })

    // execute transaction should fail if already executed
})


