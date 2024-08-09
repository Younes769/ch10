function HowManyInThisCity(people) {
  return people.reduce((count, person) => {
    const { city } = person;
    count[city] = (count[city] || 0) + 1;
    return count;
  }, {});
}

const people = [
  { name: "yacine", age: 30, city: "cambridge" },
  { name: "malak", age: 40, city: "london" },
  { name: "wahab", age: 50, city: "oxford" },
  { name: "anfal", age: 60, city: "bermingham" },
  { name: "younes", age: 70, city: "oxford" },
];

const result = HowManyInThisCity(people);
console.log(result);
