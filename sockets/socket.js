//mensajes de sockets
const {io} = require('../index');

io.on('connection', client => {
    console.log('cliente conectado')
    client.on('disconnect', () => { 
        console.log('Cliente desconectado')
    });
    client.on('mensaje',(payload) =>{
        console.log('Mensaje!!!',payload);
        io.emit('mensaje',{admin:'Nuevo mensaje'});
        

        
    
    });




  });
