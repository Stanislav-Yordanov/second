function multiplicationTable(n) {
    let output=`<table border=1>`;
    output+=`<tr>`
    for (let idx = 1; idx <=n; idx++) {
        if (idx == 1) {
            output += '<th>x</th>'
        }
        output += `<th>${idx}</th>>`
    }
    output+=`</tr>\n`;
        for (let row = 1; row <=n; row++) {
            output+=`<tr>`
            output+=`<th>${row}</th>>`;
            for(let col=1; col<=n; col++){

                output+=`<td>${row*col}</td>`;
        }
        output+=`</tr>`
            output+=`\n`;
    }
    output+=`</table>`
    console.log(output)
}
multiplicationTable(5);