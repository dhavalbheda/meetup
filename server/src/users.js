const users = []

const addUser = (id, name, room) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()
    
    if(users.find(user => user.room === room && user.name === name))
    {
        return {error: 'Username Is Already Taken'}
    }
    const newUser = {id, name, room}
    users.push(newUser)
    return {user: newUser}
}
const removeUser = (id) => {
    const index = users.findIndex(obj => obj.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    } else {
        return null
    }
}

const getUser = (id) => {
    const user = users.find(obj => obj.id === id)
    if(user)
        return user
    else
        return null
}

const getUserInRoom  = (room) => users.find(obj => obj.room === room)

module.exports = {addUser, removeUser, getUser, getUserInRoom}