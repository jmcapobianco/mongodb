import { randomUUID  } from "node:crypto";
import fs from "node:fs";

const PATH = "./log/historyUser.json";

const readHistory = () => {
    const jsonData = fs.readFileSync(PATH, "utf8");
    return JSON.parse(jsonData.toString());
};

const writeHistory = (state, id) => {
    const data = readHistory();
    
    const register = {
        id,
        date: new Date().toLocaleString(),
    };
    
    if(state === "connected") {
        data.userConnection.push(register);
    } else if ("disconnected") {
        data.userConnection.push(register);
    }

    const jsonData = JSON.stringify(data);
    fs.writeFileSync(PATH, jsonData);
};

export { readHistory, writeHistory };
