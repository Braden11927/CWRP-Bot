local discordia = require('discordia')
local client = discordia.Client()

client:on('ready', function()
	print('Logged in as '.. client.user.username)
end)

client:on('messageCreate', function(message)
	if message.content == '!ping' then
		message.channel:send('Pong!')
	end
end)

client:run('Bot NTE1NzI3MDk1MjIxOTc3MDg4.DtpW4Q.wPiLGJ19jhXg96GA8lD2KB7Mpms')