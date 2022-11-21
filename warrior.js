class Warrior {
  name
  health = 100
  mana = 100
  constructor(name) {
    if (!name) {
      throw new Error("Who are you? Name should not be in silence.")
    }

    this.name = `${name}`
  }

  heal(amount) {
    //assuming heal wont go negative XD
    if (amount <= 0) {
      throw new Error("You got to have some number to heal, right?")
    }

    this.health = 100 - this.health <= amount ? 100 : this.health + amount
  }

  takeDamage(damage) {
    if (damage <= 0) {
      throw new Error("You want blood? Do more number than 0.")
    }

    this.health = this.health <= damage ? 0 : this.health - damage
  }

  castMagic(manaCost) {
    if (manaCost <= 0) {
      throw new Error("You want magic? Do more number than 0.")
    }

    const costPower = 2
    const damage = manaCost * costPower

    //determine magic is able or not
    let flag = false

    if (this.mana >= manaCost) {
      this.mana -= manaCost
      flag = true
    }

    return flag ? damage : 0
  }

  isAlive() {
    return this.health > 0
  }
}

// Do not remove the following line
module.exports = Warrior
