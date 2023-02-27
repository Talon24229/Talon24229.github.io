function getData() {
	let currentData = JSON.parse(localStorage.getItem('gameData'))
	let newData = {}
	change = false
	if (!currentData.LemonadeClown) {
		change = true
		newData.LemonadeClown = {
			normal: {
				highScore: 0
			},
			endless: {
				highScore: 0
			},
			timed: {
				highScore: 0
			}
		}
	}
	else newData.LemonadeClown = currentData.LemonadeClown

	if (!currentData.fruitPunchClown) {
		change = true
		newData.fruitPunchClown = {
			normal: {
				highScore: 0
			},
			endless: {
				highScore: 0
			},
			timed: {
				highScore: 0
			}
		}
	}
	else newData.fruitPunchClown = currentData.fruitPunchClown

	if (!currentData.SLNight4) {
		change = true
		newData.SLNight4 = {
			highScore: 0
		}
	}
	else newData.SLNight4 = currentData.SLNight4

	return ({ data: newData, change: change })
}

function sendData(variable) {
	localStorage.setItem('gameData', JSON.stringify(variable))
}