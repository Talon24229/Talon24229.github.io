function getData() {
	return JSON.parse(localStorage.getItem('gameData'))
}
function sendData(variable) {
	localStorage.setItem('gameData', JSON.stringify(variable))
}
function resetData() {
	return {
		LemonadeClown: {
			normal: {
				highScore: 0
			},
			endless: {
				highScore: 0
			},
			timed: {
				highScore: 0
			}
		},
		fruitPunchClown: {
			normal: {
				highScore: 0
			},
			endless: {
				highScore: 0
			},
			timed: {
				highScore: 0
			}
		},
		SLNight4: {
			highScore: 0
		}
	}
}