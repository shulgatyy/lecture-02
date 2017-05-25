// import double from ...;

class AnotherFighter extends Fighter {

	constructor(name = "anotherFighter", power = 1, health = 100, critChance = 0.3) {
		super(name, power, health);
		this.critChance = critChance;
	}

	hit(enemy, point) {
		if (Math.random() <= this.critChance) {
			this.doubleHit(enemy, point);
		} else {
			super.hit(enemy, point);
		}
	}

	doubleHit(enemy, point) {
		console.log(`${this.name} makes a %cdouble%c hit!`, "color: red", "");
		super.hit(enemy, double(point));
	}
}