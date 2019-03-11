let timeStarted = getTime();
let timeFinished;
let timeCounted;

function calculateTimeCounted() { let difference = (timeFinished-timeStarted)/100;
	difference = Math.round(difference)/10;
	return difference;
}

/*calculates time in millisecondsmidnight, January 1, 1970 */
function getTime() {
  let d = new Date();
  let n = d.getTime();
  return n;
}

/*number of times player has clicked on the guessBox*/
let clickCounter = 0;

/*number of times player has guessed*/
let numberOfGuesses = 0;

function getNumberOfCorrectGuesses() { 
	let numberOfCorrectGuesses = document.getElementsByClassName('discovered').length/2;
	return numberOfCorrectGuesses;
};

/*to refresh the page so the player can 're'begin*/
let refreshSymbol = document.getElementsByClassName('glyphicon')[0];

function reloadPage() { location.reload();}

refreshSymbol.addEventListener('click', function() {
	reloadPage();
}
)

/*the array that contains the stars (smileys in my case) [0]= good [1] = neutral [2] = bad*/
let smileys = document.getElementsByClassName('em');
function good(){
	smileys[0].style.display = "flex";
};
function neutral(){
	smileys[0].style.display = "none";
	smileys[1].style.display = "flex";
};
function bad(){
	smileys[1].style.display = "none";
	smileys[2].style.display = "flex";
};
function smileysCalculation() {
	if (numberOfGuesses>14) { neutral();
	}
	if (numberOfGuesses>24) { bad();
	}
}

/*we start with 3 stars as indicated in the rubric*/
let startSmiley = good();

/*blocks the game when false. 
The game goes in this blocking state when the code for revealing the second box is running.
 It also blocks when you click on an already revealed box*/
let toggle = true;


/*this is the div where the box is to be clicked is in, so the player can guess*/
let guessBox = document.getElementsByClassName('guess_box')[0];

let counter = document.getElementsByClassName('counter')[0];



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


let imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8];
/*we need this array two times because every images has to be used two times*/
let imagesArrayDouble = imagesArray.concat(imagesArray);

/*function to declare which element will be pulled from imagesArrayDouble*/
function randomNumber() {
	let randomNumber;
	randomNumber = Math.floor(Math.random()*imagesArrayDouble.length);
	return randomNumber;
}

/*returns an array of the numbersOrdened but in a random order*/
function randomizeImagesArray() {
	let imagesRandomArray = [];
	for (i = 1; i <= 16; i++){
	let randomRemovedImage = imagesArrayDouble.splice(randomNumber(),1);
	imagesRandomArray.push(randomRemovedImage[0]);
	}
	return imagesRandomArray;
}

let imagesRandomArray = randomizeImagesArray();
let hidden = document.getElementsByClassName('hidden')[0];

/*the places to click on*/
let guessBoxes = document.getElementsByClassName('guess_box');
/*to store the name of the image we are trying to compare/find */
let discoveredImage ='not yet clicked';
/*to store the first clicked image in*/
let discoveredImageOject;


 
/*to be done: make it impossible to click too quickly, or, work with callback*/
for (i = 0; i <= 15; i++) {
	let image = imagesRandomArray[i].cloneNode(false);
	image.className = "shown";
		guessBoxes[i].addEventListener('click', function() {
			let checkForCheaters = this.getElementsByClassName('discovered');
			while (checkForCheaters.length === 1) {return};
			if (toggle === false) {return;}
		this.appendChild(image);

		clickCounter++;
		if (clickCounter%2 === 0) {
		/*block the ability to view other images*/
		toggle = false;
		numberOfGuesses++;
		/*show the meter who shows you how succesfull you are*/
		smileysCalculation();
		/*guess is wrong*/
			if (image.alt != discoveredImage) {
				discoveredImage = 'not yet clicked';
				setTimeout(function() {
					/*hide the images again*/
					hidden.appendChild(guessedBox[0]);
					hidden.appendChild(guessedBox[0]);
				}, 800);
			}
			/*guess is right*/
			if (image.alt == discoveredImage) {
				/*remove the first image that was clicked from the shown list, so that it won't be hidden*/
				discoveredImageOject.classList.remove("shown");
				discoveredImageOject.className = "discovered";
				/*remove the last image that was clicked from the shown list*/
				image.classList.remove("shown");
				image.className = "discovered";
				discoveredImage = 'not yet clicked';
			}
		setTimeout(function() {
			/*release ability to view images again*/
			toggle = true;},900);	
		}
		else {
			/*to be able to compare the second clicked image witht he first*/
		function setDiscoveredImage() {discoveredImage = image.alt;
			discoveredImageOject = image};
		setDiscoveredImage();
		}
		let guessedBox = document.getElementsByClassName('shown');
		/*show the number of guesses*/
		counter.textContent = numberOfGuesses + ' moves';
		if (checkIfGameFinished()) {
			 /*pause the display of the timer who was built in css*/
			 pauseTimer();
			 /*store the counted time in js*/
			 timeFinished = getTime();
			 timeCounted = calculateTimeCounted();
			 console.log(timeCounted);
		}
		}	


	)
}

function widthCalculation() {
	let width = guessBox.offsetWidth;
	return width;
}

function heightCalculation() {
	let height = guessBox.offsetHeight;
	return height;
}

let pauseTimerButton = document.getElementsByClassName('pause')[0];
function pauseTimer() { 
		pauseTimerButton.checked = false; 
		/*when checked is true the timer continues*/
}

function checkIfGameFinished() {
	let numberOfCorrectGuesses = getNumberOfCorrectGuesses();
	let gameFinished;
	if (numberOfCorrectGuesses === 8) {
		gameFinished = true;
	}
	if (numberOfGuesses < 8) {
		gameFinished = false;
	}
	return gameFinished;
}