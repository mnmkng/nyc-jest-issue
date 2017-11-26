function sendMessage () {
    process.send("Message from Child.")
}

sendMessage();