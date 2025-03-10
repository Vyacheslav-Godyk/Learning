const createLI = (text) => {
    document.write('<ul>')
    for (let i=0; i <= 2; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createLI('Lorem ipsum dolor sit amet, consectetur adipisicing.')