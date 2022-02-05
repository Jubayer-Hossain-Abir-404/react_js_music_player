const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 9000;

const __AUDIO_TYPE__ = {
    ROCK: "rock",
    JAZZ: "jazz",
    CINEMATIC: "cinematic",
    ACCOUSTIC: "accoustic"
}

function getDirectories(type){
    return fs.readdirSync(`./music/${type}`);
}

app.get(`/song`, (req, res) => {

    for(let type in __AUDIO_TYPE__){
        console.log(getDirectories(__AUDIO_TYPE__[type]));
    }
    res.send("Hello from server");
});

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})