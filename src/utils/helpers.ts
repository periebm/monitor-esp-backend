import dotenv from "dotenv";
dotenv.config();

export const esp ={
    ip : process.env.ESP_IP,
    port : process.env.ESP_PORT,
    url : `http://${process.env.ESP_IP}:${process.env.ESP_PORT}`
}