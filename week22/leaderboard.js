var url = "http://leaderboard-week21.herokuapp.com";

var leaderboard;

function askForName() {
	document.getElementById('input-form').style.display = 'block';
	document.getElementById('game-area').style.display = 'block';
	document.getElementById('score-title').textContent = "Your score: " + score.text;
}

function drawLeaderboard() {
	loadLeaderboard(function(scores) {
		var leaderboard = document.getElementById('leaderboard');
		leaderboard.style.display = 'block';
		while (leaderboard.hasChildNodes()) {
		    leaderboard.removeChild(leaderboard.firstChild);
		}

		for(var i in scores) {
			if (scores[i].value) {
				try {
					var value = JSON.parse(scores[i].value);
					if (value.text) {
						leaderboard.insertAdjacentHTML('beforeend',
							'<li>' +
								'<span class="gamer">' + scores[i]._id + '&nbsp;</span>' +
								'<span class="score">' + value.text + '</span>' +
							'</li>');
					}
				} catch (e) {
					console.log(value);
				}
			}
		}
		document.getElementById('input-form').style.display = 'none';
	});
}

function loadLeaderboard(callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function() {
		if (xhr.status === 200) {
			callback(JSON.parse(xhr.responseText));
		} else {
			alert('Request failed.  Returned status of ' + xhr.status);
		}
		document.getElementById("game-area").style.cursor = "default";
	};
	xhr.send();

}

function handleClick() {
	document.getElementById("game-area").style.cursor = "progress";

	var name = document.aye.username.value;
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', url + "/" + name);
	// xhr.withCredentials = true;
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			drawLeaderboard();
		} else if (xhr.status !== 200) {
			alert('Request failed.  Returned status of ' + xhr.status);
			document.getElementById("game-area").style.cursor = "default";
		}

	};
	xhr.send(JSON.stringify(score));

	event.preventDefault(); // disable normal form submit behavior
	return false; // prevent further bubbling of event
}
