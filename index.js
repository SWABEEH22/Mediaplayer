const jsonServer=require("json-server")
const Ltserver =jsonServer.create()

const middleware=jsonServer.defaults()

    const route =jsonServer.router('db.json')
    const PORT=3000 || process.env.PORT

    Ltserver.use(middleware)
    Ltserver.use(route)

    Ltserver.listen(PORT,()=>{
        console.log(`media player server running at ${PORT}and waiting for client request`);
        
    })

