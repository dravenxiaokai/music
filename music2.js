var EventEmitter = require('events').EventEmitter

function MusicPlayer(track){
	this.track = track
	this.playing = false

	for(var methodname in EventEmitter.prototype){
		this[methodname] = EventEmitter.prototype[methodname]
	}
}

MusicPlayer.prototype = {
	toString:function(){
		if(this.playing){
			return 'Now playing: '+this.track
		}else{
			return 'Stopped'
		}
	}
}

var musicPlayer = new MusicPlayer('Girl Talk - Still Here')

musicPlayer.on('play',function(){
	this.playing = true
	console.log(this.toString())
})
musicPlayer.on('stop',function(){
	this.playing = false
	console.log(this.toString())
})

musicPlayer.emit('play')
setTimeout(function(){
	musicPlayer.emit('stop')
},3000)