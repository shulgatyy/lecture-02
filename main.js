const double = v => v * 2;

class Fighter {

	constructor(name = "fighter", power = 1, health = 100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		let {health} = this;

		health -= damage;
		if (health < 0) {
			health = 0;
		}
		this.health = health;

		console.log(`${this.name}'s health: ${health}`);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		enemy.setDamage(damage);
	}
}

class ImprovedFighter extends Fighter {

	constructor(name = "improvedFighter", power = 1, health = 100) {
		super(name, power, health);
		// super(...arguments); в arguments не попадають значення по замовчуванню О.о
	}

	doubleHit(enemy, point) {
		this.hit(enemy, double(point));
	}
}

function fight(fighter, improvedFighter, ...points) {
	const isDead = target => !target.health;
	let striker = fighter;
	let meat = improvedFighter;

	if (isDead(striker)) {
		return "dead bees don't buzz (:";
	} else if (isDead(meat)) { //I like programming
		return "walking dead!";
	}

	for (let point of points) {
		striker.hit(meat, point);
		if (isDead(meat)) {
			return `${meat.name} is dead, ${striker.name} won!`;
		}
		[striker, meat] = [meat, striker];
	}
	return "Both still alive. Repeat fight!";
}

const fighter = new Fighter;
const improvedFighter = new ImprovedFighter;

// improvedFighter says: Why am I second? Is it because I'm black?
console.log(fight(fighter, improvedFighter, 22, 24, 6));
console.log(fight(fighter, improvedFighter, 15, 27, 18, 23, 13, 19));
console.log(fight(fighter, improvedFighter, 13, 13));