const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('../db')

class Game extends Model {
  // possible game states
  // open = 'open' // host has opened a game but game has not started
  // active = 'active' // game is in progress
  // complete = 'complete' // game is complete

  setHost(player) {
    player.belongsTo(this)
  }
}

Game.init({
  hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: this.open
  },
}, {
  sequelize,
  modelName: 'Game'
})

module.exports = { Game }