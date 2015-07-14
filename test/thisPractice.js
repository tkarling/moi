console.log('moi');

var people = [
	{ name: 'AJ'
	, age: 29
	}
, 	{ name: 'Adeline'
	, age: 25
	}
];

var aj = people[0];

function isOver25() {
	var person = this;
	return person.age > 25;
}
function sayName() {
	var person = this;
	return person.name;
}
function sayAge() {
	var person = this;
	return person.age;
}

for (var i = 0; i < people.length; i++) {
	people[i].isOver25 = isOver25;
	people[i].sayName = sayName;
	people[i].sayAge = sayAge;
}

aj.isOver25 = isOver25; // implicit context/ this, binding
aj.sayName = sayName;
aj.sayAge = sayAge;

console.log('aj', aj.isOver25());
console.log('people[1]', people[1].isOver25());
console.log(people[0].sayName());
console.log(people[0].sayAge());

// var ajsAge = aj.sayAge;
var ajsAge = aj.sayAge.bind(aj);    // explicit context, returns new fn
console.log('ajsAge()', ajsAge());


//
// Bind, call, apply
//
var skills = ['Programmer', 'DJ', 'MathMagician'];
function showSkillz(skillA, skillB) {
	var person = this;
	console.log(person.name + " has Ninja "
		+ skillA + " skills"
		+ " and is a Wizard " + skillB
		);
}

var showAjsSkillz = showSkillz.bind(aj);
showAjsSkillz('Bat', 'Rabbit');

showSkillz.call(aj, skills[0], skills[1]); // explicit context/ this, execs w params
showSkillz.apply(aj, skills); // explicit context/ this, execs after converting array to params

