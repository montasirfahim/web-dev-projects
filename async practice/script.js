console.log("first input");
console.log("second line");

setTimeout(() => {
	console.log("third line");;
}, 3000);

console.log("fourth line");
setTimeout(() => {
	console.log("fith line");;
}, 2000);



fetch("student.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    console.log(data.name);
    console.log(data.friend[0].name);
  })
  .catch(err => console.error(err));
