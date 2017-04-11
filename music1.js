var util = require('util')
var events = require('events')

var AudioDevice = {
	play:function(track){
		console.log('播放音乐 '+track)
	},
	stop:function(){
		console.log('停止播放')
	}
}

function MusicPlayer(){
	this.playing = false;
	events.EventEmitter.call(this)
}

util.inherits(MusicPlayer,events.EventEmitter)

var musicPlayer = new MusicPlayer()

function play(track){
	this.playing = true
	AudioDevice.play(track)
}

musicPlayer.on('play',play)
//删除监听器
musicPlayer.removeListener('play',play)

musicPlayer.on('stop',function(){
	this.playing = false
	AudioDevice.stop()
})

musicPlayer.emit('play','The Roots - The Fire')

setTimeout(function(){
	musicPlayer.emit('stop')
},3000)