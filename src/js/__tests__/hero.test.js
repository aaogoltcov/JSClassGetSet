import { Character } from '../hero'
import { Bowerman } from '../hero'
import { Swordsman } from '../hero'
import { Magician } from '../hero'
import { Daemon } from '../hero'
import { Undead } from '../hero'
import { Zombie } from '../hero'
import { test } from "@jest/globals";

test('should attacked', () => {
    let daemon = new Character('Nick', 'Daemon', 100)
    expect(daemon.attacked).toBe(100)
    expect(daemon.attacked = 2).toBe(2)
    expect(daemon.attacked).toBe(90)
    expect(daemon.attacked = 11).toBe(11)
    expect(daemon.attacked).toBe(0)
    expect(daemon.attacked = 20).toBe(20)
    expect(daemon.attacked).toBe(0)

    let magician = new Character('Nick', 'Magician', 100)
    expect(magician.attacked).toBe(100)
    expect(magician.attacked = 2).toBe(2)
    expect(magician.attacked).toBe(90)
    expect(magician.attacked = 11).toBe(11)
    expect(magician.attacked).toBe(0)
    expect(magician.attacked = 20).toBe(20)
    expect(magician.attacked).toBe(0)
})

test('should stoned', () => {
    let daemon = new Character('Nick', 'Daemon', 100)
    expect(daemon.stoned).toBe(100)
    expect(daemon.stoned = 2).toBe(2)
    expect(daemon.stoned).toBe(85)

    let magician = new Character('Nick', 'Magician', 100)
    expect(magician.stoned).toBe(100)
    expect(magician.stoned = 2).toBe(2)
    expect(magician.stoned).toBe(85)
})

test('should be magician', () => {
    let magician = new Magician('Nick')
    expect(magician.attacked).toBe(10)
    expect(magician.attacked = 1).toBe(1)
    expect(magician.attacked).toBe(10)
    expect(magician.stoned).toBe(10)
    expect(magician.stoned = 1).toBe(1)
    expect(magician.stoned).toBe(10)
})

test('should be daemon', () => {
    let daemon = new Daemon('Nick')
    expect(daemon.attacked).toBe(10)
    expect(daemon.attacked = 1).toBe(1)
    expect(daemon.attacked).toBe(10)
    expect(daemon.stoned).toBe(10)
    expect(daemon.stoned = 1).toBe(1)
    expect(daemon.stoned).toBe(10)
})

test('should be error', () => {
    let daemon = new Character('Nick', 'Daemon', 100)
    expect(daemon.attacked).toBe(100)
    expect(function() {
        daemon.attacked = 0
    }).toThrow(new Error('Wrong attacked distance...'));
    expect(function() {
        daemon.stoned = 0
    }).toThrow(new Error('Wrong stoned distance...'));
})

test('should mistake', () => {
    expect(function() {
        new Zombie('')
    }).toThrow(new Error('Name is too short / long...'));
    expect(function() {
        new Character('Monster', '')
    }).toThrow(new Error('Wrong type of Hero...'));
});

test('should objects', () => {
    expect(new Character('Monster', 'Daemon')).toEqual({
        name: 'Monster',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined
    });
    expect(new Bowerman('Nick')).toEqual({
        name: 'Nick',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
    expect(new Swordsman('Nick')).toEqual({
        name: 'Nick',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
    expect(new Magician('Nick')).toEqual({
        name: 'Nick',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
    expect(new Daemon('Nick')).toEqual({
        name: 'Nick',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
    expect(new Undead('Nick')).toEqual({
        name: 'Nick',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
    expect(new Zombie('Nick')).toEqual({
        name: 'Nick',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});
