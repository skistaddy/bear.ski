fs = require("fs")
path = require("path")
express = require("express")
app = express()

function bearTest(words){
    words = words.split(" ").filter(x => x)
    if(words.length > 4){
        return false
    }

    words = words.map(x => x.replace(/[^a-zA-Z]+/g, '').toLowerCase())
    bear = ["b", "e", "a", "r"]

    for(i in words){
        if(bear[i] != words[i][0]){
            console.log("doesn't have a ", bear[i])
            return false
        }
    }
    return true
}

dist = path.join(__dirname, "dist/browser")
app.use(express.static(dist))
app.use(express.json())

app.post("/submit", (req, res) => {
    console.log(req.body)
})

app.get("*", (req, res) => {
    res.sendFile(path.join(dist, "index.html"))
})

port = 4200
app.listen(port, () => {
    console.log("listening on " + port)
})
