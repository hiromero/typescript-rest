interface Stark {
  name: String;
  age?: Number;
}

function printName(stark: Stark) {
  console.log(stark.name);
}

printName({ name: "glaizen" });
printName({ name: "hiro" });
