const { artifacts } = require("truffle");
const { contract } = require("truffle");
const Token = artifacts.require('./Token')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', ([deployer]) => {
    const name = 'LX Token'
    const symbol = 'LXT'
    const decimals = '18'
    const totalSupply = '1000000000000000000000000'
    let token

    beforeEach(async () => {
        //Fetch token from blockchain
        token = await Token.new()
    })

    describe('deployment', () => {
        it('tracks the name', async () => {
            //Read token name here...
            const result = await token.name()
            //Check the token name
            result.should.equal(name)
        })
        it('tracks the symbol', async () => {
            //Read token symbol here...
            const result = await token.symbol()
            //Check the token symbol
            result.should.equal(symbol)
        })
        it('tracks the decimals', async () => {
            //Read token decimals here...
            const result = await token.decimals()
            //Check the token decimals
            result.toString().should.equal(decimals)
        })
        it('tracks the total supply', async () => {
            //Read token total supply here...
            const result = await token.totalSupply()
            //Check the token total supply
            result.toString().should.equal(totalSupply)
        })
        it('assigns the total supply to the deployer', async () => {
            //Assign token total supply here...
            const result = await token.balanceOf(deployer)
            //Check the token total supply
            result.toString().should.equal(totalSupply)
        })
    })
})