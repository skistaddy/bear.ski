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
            console.log("doesn't have a", bear[i])
            return false
        }
    }
    return true
}

dist = path.join(__dirname, "dist/browser")
bearfile = path.join(__dirname, "public", "bear.txt")
app.use(express.static(dist))
app.use(express.json())

app.post("/submit", (req, res) => {
    input = req.body.body

    if(!input){
        console.log("didn't receive an input")
        return res.sendStatus(400)
    }

    if(!bearTest(input)){
        console.log("didn't fit acronym rules")
        return res.sendStatus(400)
    }

    if(!fs.existsSync(bearfile)){
        console.log("couldn't find bear.txt")
        return res.sendStatus(400)
    }

    fs.appendFileSync(bearfile, "\n"+input)
    console.log("acronym added:", input)
    return res.send()
})

app.get("*", (req, res) => {
    res.sendFile(path.join(dist, "index.html"))
})

port = 4200
app.listen(port, () => {
    console.log("listening on " + port)
})
