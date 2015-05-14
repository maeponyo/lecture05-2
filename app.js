function skip15sec(){//15秒進む
	var player = document.querySelector("audio");
	player.currentTime = player.currentTime + 15;
};

function back15sec(){//15秒戻る
	var player = document.querySelector("audio");
	player.currentTime = player.currentTime - 15;
};


function tohead(){//頭出し
	var player = document.querySelector("audio");
	player.currentTime = 0;
};


function onloop(){//ループ
	var player = document.querySelector("audio");
	player.loop = true;
};

function showPlyabackRate(value){
	var label = document.querySelector("#playback-rate-control > span");
	label.textContent = "x " + value;
}

function setPlaybackRate(value){
	var player = document.querySelector("audio");
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