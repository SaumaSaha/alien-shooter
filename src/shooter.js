class Shooter {
	#position;
	#range;
	#shooter;
	#rightEnd;
	constructor(shooter, shootingRange) {
		this.#shooter = shooter;
		this.#range = new Array(shootingRange);
		this.#rightEnd = shootingRange - 1;
		this.#position = Math.floor(shootingRange / 2);
	}

	get position() {
		return this.#position;
	}

	moveLeft() {
		this.#position -= this.#position !== 0 ? 1 : 0;
	}

	moveRight() {
		this.#position += this.#position !== this.#rightEnd ? 1 : 0;
	}

	display() {
		this.#range.fill("  ");
		this.#range[this.#position] = this.#shooter;
		console.log(this.#range.join(" "));
	}
}
exports.Shooter = Shooter;
