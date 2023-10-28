const mongoose = require("mongoose");

const alarm = mongoose.Schema({
	guildId: String,
	userId: String,
	private_voices: {
		voiceId: {type: String, default: null},
		lock: { type: Boolean, default: true }
	}
})



module.exports = mongoose.model("scusers", alarm);