/* eslint-disable prefer-const */
import { BigDecimal } from '@graphprotocol/graph-ts'

export let FACTORY_ADDRESS = '0xbEAC7e750728e865A3cb39D5ED6E3A3044ae4B98'
export let WETH_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'



// tokens where USD value is safe to use for globals
export let WHITELIST_TOKENS: string[] = [
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', //WBNB
  '0x55d398326f99059ff775485246999027b3197955', //USDT
]

// used for safe eth pricing 
export let STABLE_COINS: string[] = [
  '0x55d398326f99059ff775485246999027b3197955', //USDT
]

// used for safe eth pricing 
export let STABLE_POOL_ADDRESS = '0xb55d67aa2d57861c81487b29a578ae1cdf272795'

// determines which token to use for eth<-> rate, true means stable is token0 in pool above 
export let STABLE_IS_TOKEN_0 = true

// minimum eth required in pool to count usd values towards global prices 
export let MINIMUM_ETH_LOCKED = BigDecimal.fromString('10')

// pool that breaks with subgraph logic 
export let ERROR_POOL = ''
