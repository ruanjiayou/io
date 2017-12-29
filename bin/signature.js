const NET = require('net-helper');
const shttp = NET.shttp;
const IO = require('utils2/lib/io');
const URI = require('uri-parser-helper');
const Parser = require('html-parser2');

let entry = new URI('https://www.filesignatures.net/index.php?page=all&currentpage=1&order=EXT');

async function getData(url) {
    let result = [];
    let res = await NET.getHTML(url);
    if (res.status !== NET.Result.STATUS_SUCCESS) {
        throw new Error('获取网页错误!');
    }
    let document = new Parser(res.message);
    //IO.addTxt(`${__dirname}/test.html`, document.toString());
    let trs = document.$('#innerTable')[0].$('tr');
    for (let i = 1; i < trs.length; i++) {
        let tds = trs[i].$('td');
        let ext = tds[1].$('a')[0].innerText;
        let hex = tds[2].$('a')[0].innerText.replace(/\s/g, '').toUpperCase();
        let des = tds[3].innerText;
        result.push({
            ext: ext,
            hex: hex,
            des: des
        });
    }
    return result;
}

getData(entry.href).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err.message);
});