import net from "node:net";
import dotenv, { config } from "dotenv";
dotenv,config();

let port = process.env.PORT ?? 2323;


const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
    
    socket.on("data", (bufferData) => {
        const data = JSON.parse(bufferData.toString());
        console.log(data);
    });
    
    socket.on("close", () => {
        console.log("Client disconnected")
    });
    
    socket.on("error", () => {
        console.log("Client error");
    });

    console.log("Client connected", new Date().toLocaleDateString());

});

serverTCP.listen(port, () => {
    console.log("Server is up on server", port, "  ", new Date().toLocaleDateString());
});
