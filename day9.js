function greet(name, callback) {
   console.log("Hello " + name);
   callback();
}

function done() {
   console.log("Done!");
}

greet("Bharath", done);