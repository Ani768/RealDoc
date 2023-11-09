const io=require('socket.io')(3005, {
    cors:{
        origin:'http://localhost:3000',
        methods:["GET","POST"],
    },
})

io.on("connection",socket=>{
    socket.on("get-doc",docID=>{
        const data=""
        socket.join(docID)
        socket.emit("load-doc",data)
    socket.on('send-changes',delta=>{
        socket.broadcast.to(docID).emit("receive",delta)
    })
})
})