# rolls-blockchain 

PecanRolls is an eco-friendly decentralization blockchain based on the Proof of Space and Time (PoST) consensus pioneered by PecanRolls™. It maintains network robustness, in line with Satoshi Nakamoto's principles.

PecanRolls uses the powerful and secure Chialisp language for Smart Contracts, and supports digital money, global payments and applications. PecanRolls is not affiliated with PecanRolls Network, Inc., but uses their open-sourced software as its foundation.

Farming PecanRolls does not consume significant amounts of electricity, and utilizes hard drive space, instead of specialized computing hardware that most Proof of Work (PoW) consensus blockchains have come to demand. Moreover, since electrical energy costs for running hard drives is very minimal, due to this low cost of entry, PecanRolls will remain more decentralized and fair, and thus more secure than any Proof of Stake cryptocurrency.

PecanRolls core values include green cryptocurrency, long term value, building for the future, strength in community, and maintaining a huge team to ensure long term development.

**BLOCKCHAIN SPECIFICATION:**
- Launch date: Nov 1st 2021
- Cryptocurrency coin: ROLLS
- Lowest coin denomination: pecans
- Conversion: 1 ROLLS = 1,000,000,000,000 Bytes
- Blocks per 24 hours target: 4,608
- Farmed rewards per block: 6 ROLLS
- Halving period for block rewards: 3 years

**BLOCKCHAIN RESOURCES:**
- Website: https://pecanrolls.net/

**COMMUNITIES AND SOCIAL CHANNELS:**
- Discord: https://discord.gg/s9tFgvwCF9
- Twitter: https://twitter.com/pecanrolls


***********************************************
# INSTALL INSTRUCTIONS:

You can install PecanRolls by building from source, or by using the latest binaries for your operating system.


```
# Update / Upgrade OS

   sudo apt-get update
   sudo apt-get upgrade -y

# Install Git

   sudo apt install git -y

# Checkout the repo

git clone https://github.com/strandedathome/rolls-blockchain.git

# Install the Blockchain

   cd rolls-blockchain
   sh install.sh
   . ./activate
   rolls init

```

If the client does not find any connections automatically, you can add any of the following:

***********************************************

# UPDATE/UPGRADE INSTRUCTIONS:

```
# Checkout the source and update

  cd rolls-blockchain
  . ./activate
  rolls stop -d all
  deactivate
  git fetch
  git checkout main
  git reset --hard FETCH_HEAD --recurse-submodules
  sh install.sh
  . ./activate
  rolls init

```
