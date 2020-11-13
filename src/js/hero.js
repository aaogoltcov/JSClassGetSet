'use strict'

export class Character {
    constructor(name, type, attack, defence) {
        const heroes = [
            'Bowerman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if ( name && 2 <= name.length <= 10 ) { this.name = name } else { throw new Error('Name is too short / long...') };
        if ( heroes.includes(type) ) { this.type = type } else { throw new Error('Wrong type of Hero...') };

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    get attacked() {
        return this.attack;
    }

    set attacked(distance) {
        if (distance > 0) {
            this.attack = Math.max(0, (this.attack - this.attack * (distance - 1) / 10));
        } else { throw new Error('Wrong attacked distance...') }
    }

    get stoned() {
        return this.attack;
    }

    set stoned(distance) {
        if (distance > 0) {
            this.attacked = distance
            this.attack = Math.max(0, (this.attack - Math.log2(distance) * 5));
        } else { throw new Error('Wrong stoned distance...') }
    }

}

export class Bowerman extends Character{
    constructor(name) {
        super(name, 'Bowerman', 25, 25);
    }
}

export class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman', 40, 10);
    }
}

export class Magician extends Character{
    constructor(name) {
        super(name, 'Magician', 10, 40);
    }

    get attacked() {
        return super.attacked;
    }

    set attacked(distance) {
        super.attacked = distance;
    }

    get stoned() {
        return super.stoned;
    }

    set stoned(distance) {
        super.stoned = distance;
    }

}

export class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon', 10, 40);
    }

    get attacked() {
        return super.attacked;
    }

    set attacked(distance) {
        super.attacked = distance;
    }

    get stoned() {
        return super.stoned;
    }

    set stoned(distance) {
        super.stoned = distance;
    }

}

export class Undead extends Character{
    constructor(name) {
        super(name, 'Undead', 25, 25);
    }
}

export class Zombie extends Character{
    constructor(name) {
        super(name, 'Zombie', 40, 10);
    }
}
