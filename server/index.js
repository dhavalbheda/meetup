const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

//server configration 
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT || 5000

//Chat Room 
const {addUser, removeUser, getUser, getUserInRoom} = require('./src/users')

//router
const router = require('./router/router')

io.on('connection', (socket) => {
        console.log('new Added')

    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser(socket.id, name, room)

        if(error) return callback(error)
        
        socket.emit('message', {user: 'Admin', 'text': `${user.name}, Welcome To ${user.room} room`})
        socket.broadcast.to(user.room).emit('message', {user: 'Admin', 'text': `${user.name}, had Joind `})
        
        socket.join(user.room)

        callback()
    })

    socket.on('sendMessage', (message) => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('message', {user: user.name, text: message})

    })
    socket.on('disconnect', () => {
    
        const user = removeUser(socket.id)
        if(user)
            io.to(user.room).emit('message',{user:'Admin',  text:`${user.name} Has Left The Room`})
    })
    
})
app.use(router)
app.use(cors())

server.listen(PORT, () => {
    console.log(`server runnin on ${PORT}` )
})

