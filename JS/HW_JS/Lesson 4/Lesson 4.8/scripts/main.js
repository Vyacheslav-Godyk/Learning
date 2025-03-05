function foobar(arr){
    document.write('<ul>');
    for(let item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

foobar(['hi', 'wheare are you ?', 5, 11, true])