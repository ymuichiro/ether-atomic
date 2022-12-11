module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545, // default for Ganache
      network_id: "4447"
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
}
