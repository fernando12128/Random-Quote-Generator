function generate(){
    let quotes = {
        "Oscar Wilde" : "Be yourself; everyone else is already taken.", "Marilyn Monroe" : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Frank Zappa": "So many books, so little time."
    }

    let authors = Object.keys(quotes)

    let author = authors[Math.floor(Math.random() * authors.length)]

    let quote = quotes[author]

    document.getElementById("quote").innerHTML = quote
    document.getElementById("author").innerHTML = author
}