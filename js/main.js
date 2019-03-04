/*number of times player has clicked on the guessBox*/
let clickCounter = 0;

/*number of times player has guessed*/
let numberOfGuesses = calculateNumberOfGuesses();

/*function to calculate the number of times player has guessed*/
function calculateNumberOfGuesses () {
	let numberOfGuesses;
	if (clickCounter%2 === 0) {
		numberOfGuesses = clickCounter/2;
	} else {
		numberOfGuesses = Math.floor(clickCounter/2);
	}
	return numberOfGuesses;
}

/*this is the div where the box is to be clicked is in, so the player can guess*/
let guessBox = document.getElementsByClassName('guess_box') [0];

/*places where the image should come in*/
let place1 = document.getElementsByClassName('guess_box') [0];
let place2 = document.getElementsByClassName('guess_box') [1];
let place3 = document.getElementsByClassName('guess_box') [2];
let place4 = document.getElementsByClassName('guess_box') [3];
let place5 = document.getElementsByClassName('guess_box') [4];
let place6 = document.getElementsByClassName('guess_box') [5];
let place7 = document.getElementsByClassName('guess_box') [6];
let place8 = document.getElementsByClassName('guess_box') [7];
let place9 = document.getElementsByClassName('guess_box') [8];
let place10 = document.getElementsByClassName('guess_box') [9];
let place11 = document.getElementsByClassName('guess_box') [10];
let place12 = document.getElementsByClassName('guess_box') [11];
let place13 = document.getElementsByClassName('guess_box') [12];
let place14 = document.getElementsByClassName('guess_box') [13];
let place15 = document.getElementsByClassName('guess_box') [14];
let place16 = document.getElementsByClassName('guess_box') [15];

const img1 = new Image();
img1.src = "../img/afghanistan.png";
img1.alt = "afghanistan";
img1.width = widthCalculation();
img1.height = heightCalculation();

const img2 = new Image();
img2.src = "../img/angola.png";
img2.alt = "angola";
img2.width = widthCalculation();
img2.height = heightCalculation();

const img3 = new Image();
img3.src = "../img/bahamas.png";
img3.alt = "bahamas";
img3.width = widthCalculation();
img3.height = heightCalculation();

const img4 = new Image();
img4.src = "../img/belgium.png";
img4.alt = "belgium";
img4.width = widthCalculation();
img4.height = heightCalculation();

const img5 = new Image();
img5.src = "../img/bolivia.png";
img5.alt = "bolivia";
img5.width = widthCalculation();
img5.height = heightCalculation();

const img6 = new Image();
img6.src = "../img/kiribati.png";
img6.alt = "kiribati";
img6.width = widthCalculation();
img6.height = heightCalculation();

const img7 = new Image();
img7.src = "../img/mongolia.png";
img7.alt = "mongolia"
img7.width = widthCalculation();
img7.height = heightCalculation();

const img8 = new Image();
img8.src = "../img/panama.png";
img8.alt = "panama";
img8.width = widthCalculation();
img8.height = heightCalculation();

/*function to declare which element will be pulled from numbersOrdened*/
function randomNumber() {
	let randomNumber;
	randomNumber = Math.floor(Math.random()*numbersOrdened.length);
	return randomNumber;
}

/*this array represent all the images, they are put in twice because each image has to be twice in the game*/
let numbersOrdened = [1, 1, 2 ,2 ,3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

/*returns an array of the numbersOrdened but in a random order*/
function randomizeNumbers() {
	let numbersRandomArray = [];
	for (i = 1; i <= 16; i++){
	let randomRemovedNumber = numbersOrdened.splice(randomNumber(),1);
	numbersRandomArray.push(randomRemovedNumber[0]);
	}
	return numbersRandomArray;
}

let numbersRandomArray = randomizeNumbers();

place1.addEventListener('click', function() {
	place1.appendChild(img1);
	clickCounter ++;
})


function widthCalculation() {
	let width = guessBox.offsetWidth;
	return width;
};

function heightCalculation() {
	let height = guessBox.offsetHeight;
	return height;
}
