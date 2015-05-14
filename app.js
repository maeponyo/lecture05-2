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