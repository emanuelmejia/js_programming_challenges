function getRandomInt()
{
	let randomNumber = Math.random();
	return Math.floor(randomNumber * 6) + 1;
}
console.log(getRandomInt());