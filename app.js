var player = document.querySelector("audio");
var playList = ["01.mp3", "02.mp3","03.mp3","04.mp3","05.mp3"];
var playing = 0;

function skip15sec(){//15秒進む
	player.currentTime = player.currentTime + 15;
};

function back15sec(){//15秒戻る
	player.currentTime = player.currentTime - 15;
};


function tohead(){//頭出し
	player.currentTime = 0;
};


function onloop(){//ループ
	player.loop = true;
};

function showPlyabackRate(value){
	var label = document.querySelector("#playback-rate-control > span");
	label.textContent = "x " + value;
}

function setPlaybackRate(value){
	player.playbackRate = value;
	showPlyabackRate(value);
};

function onPlaybackRateChangeed(event){
	var rate = playbackRateControl.value;
	setPlaybackRate(rate);
};

function onPlaybackRateReset(event){
	var rate = 1;
	setPlaybackRate(rate);
	playbackRateControl.value = 1;
};

function showNowPlaying(value){
	var label = document.querySelector("#nowplayind");
	label.textContent =  value;
}


function setMusic(index){
	player.pause();

	index = index % playList.length;
	var music = playList[index];
	player.src = music;

	player.play();
	showNowPlaying(music);
}

function playNextMusic(){
	playing = (playing + 1)% playList.length;
	setMusic(playing)
}

function onPlaybackEnded(event){
	playNextMusic();
}

function nextMusic(){
	playNextMusic();
}

function draw(){
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var data = [20, 10, 50, 60, 30, 20, 40, 50, 60, 30, 10, 20, 40, 70, 5, -1, -20, -5, -20, -7, -5, 5];
  ctx.fillStyle = "rgb(255,255,255)";
  var i = 0;
  var offset = 5;
  var x = 5;
  var width = (canvas.width - x)/data.length - offset;

  while(i < data.length){
  	ctx.fillRect(x, canvas.height / 2- data[i] * 4, width, data[i]*4);
  	i = i + 1;
  	x = x + width + offset;
  }

}



var skip15secButton = document.querySelector("#skip-15s-button");
skip15secButton.addEventListener("click",skip15sec);

var back15secButton = document.querySelector("#back-15s-button");
back15secButton.addEventListener("click",back15sec);

var toheadButton = document.querySelector("#to-head");
toheadButton.addEventListener("click",tohead);

var onloopButton = document.querySelector("#on-loop");
onloopButton.addEventListener("click",onloop);

var playbackRateControl = document.querySelector("#playback-rate-control > input");
playbackRateControl.addEventListener("change",onPlaybackRateChangeed);

var playbackRateReset = document.querySelector("#playback-rate-control > button");
playbackRateReset.addEventListener("click",onPlaybackRateReset);

player.addEventListener("ended",onPlaybackEnded);

var goNext = document.querySelector("#go-next");
goNext.addEventListener("click",nextMusic);

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
