const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
// const socket = io('http://localhost:4000', {transports: ['websocket']});

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
    options={
      cors:true,
      origins:["http://localhost:3000"],
     }
  })
})

http.listen(4000, function() {
  console.log('listening on port 3000')
})

// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "http://localhost:4000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }
// });

