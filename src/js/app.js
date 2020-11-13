'use strict'

import { Character } from './hero'
import { Bowerman } from './hero'
import { Swordsman } from './hero'
import { Magician } from './hero'
import { Daemon } from './hero'
import { Undead } from './hero'


console.log(new Character('Monster', 'Daemon'))
console.log(new Bowerman('Nick'))
console.log(new Swordsman('Nick'))
console.log(new Magician('Nick'))
console.log(new Daemon('Nick'))
console.log(new Undead('Nick'))

let daemon = new Character('Nick', 'Daemon', 100)
// daemon.stoned
console.log(daemon.stoned)
console.log(daemon.stoned = 10)
console.log(daemon.stoned)
// console.log(daemon.attacked)
// console.log(daemon.attacked = 1)
// console.log(daemon.attacked)
// console.log(daemon.stoned)
// console.log(daemon.stoned = 0)
// console.log(daemon.stoned)
// console.log(daemon.attacked)
// console.log(daemon.attacked = 0)
// console.log(daemon.attacked)

