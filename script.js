let data = {
    pp: {
        header: 'Pattern Party',
        img: './imgs/ppsnip.png',
        info: 'Pattern Party is a fun quick finger, memory game you can challenge friends with to see who can be the Partern Party Champion 🏆. This Game is a desktop application made with electron.</p>\
        '
    },
    lp: {
        header: 'Landing Page',
        img: './imgs/lpsnip.PNG',
         link: 'https://m9-gbr.github.io/Uncle-Joe-s-Pizza/',
        info: 'A landing page made for a fictional pizza company called Uncle Joe\'s Pizza 🍕'
    },
    xo: {
        header: 'X and O',
        img: './imgs/xando.png',
        link: 'https://m9-gbr.github.io/xando/',
        info: 'A simple X and O web game made wih Javascript that has the ability to play with a friend or with the Computer.'
    },
    cookie: {
        header: 'Cookie Library',
        img: './imgs/cookie.png',
        link: 'https://github.com/M9-GBR/cookie-library',
        info: 'A Library for easy creating, deletion and modification of a domain\'s cookies.'
    }
}

let prjDiv = document.getElementById('prj_sec_in')

for (const prj in data) {
    prjDiv.innerHTML += `<div class="card bg-dark text-bg-dark">\
        <div class="card-header">\
            <p class="h1">${data[prj].header}</p>\
        </div>\
        <div class="card-body">\
            <img src="${data[prj].img}" class="card-img">\
        </div>\
        <div class="card-footer">\
            <button type="button" class="btn btn-danger" data-bs-toggle="offcanvas"\
                data-bs-target="#minfo" onclick="osbOpen('${prj}')">See More</button>\
        </div>\
    </div>`
}

function osbOpen(arg) {
    let header = document.querySelector('#minfo .offcanvas-title'),
        img = document.querySelector('#minfo #proj_img'),
        infoDiv = document.querySelector('#minfo #proj_info'),
        prjLink = document.querySelector('#minfo .offcanvas-body a')

    header.innerHTML = data[arg].header
    img.src = data[arg].img
    infoDiv.innerHTML = data[arg].info
    prjLink.href = data[arg].link
}
