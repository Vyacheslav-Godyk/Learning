const createList = (arr) => {
    document.write('<ul>');
    for(const item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

createList([1,'hello', true]);