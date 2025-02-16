const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = {
    songs: [
        {
            name: "Đừng Làm Trái Tim Anh Đau",
            singer: "Sơn Tùng M-TP",
            path: "./assets/music/song1.mp3",
            image: "./assets/img/song1.png",
        },
        {
            name: "NGÀY ĐẦU TIÊN",
            singer: "ĐỨC PHÚC",
            path: "./assets/music/song2.mp3",
            image: "./assets/img/song2.png",
        },
        {
            name: "ex's hate me, Pt.2",
            singer: "AMEE",
            path: "./assets/music/song3.mp3",
            image: "./assets/img/song3.png",
        },
        {
            name: "từ thích thích thành thương thương (cùng với Hoàng Dũng)",
            singer: "AMEE",
            path: "./assets/music/song4.mp3",
            image: "./assets/img/song4.png",
        },
        {
            name: "Chúng Ta Của Tương Lai",
            singer: "Sơn Tùng M-TP",
            path: "./assets/music/song5.mp3",
            image: "./assets/img/song5.png",
        },
        {
            name: "Mất Kết Nối",
            singer: "Dương Domic",
            path: "./assets/music/song6.mp3",
            image: "./assets/img/song6.png",
        },
        {
            name: "Mất Kết Nối",
            singer: "Dương Domic",
            path: "./assets/music/song6.mp3",
            image: "./assets/img/song6.png",
        },
        {
            name: "Mất Kết Nối",
            singer: "Dương Domic",
            path: "./assets/music/song6.mp3",
            image: "./assets/img/song6.png",
        },
        {
            name: "Mất Kết Nối",
            singer: "Dương Domic",
            path: "./assets/music/song6.mp3",
            image: "./assets/img/song6.png",
        },
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        })
        $('.playlist').innerHTML = htmls.join('');
    },
    handleEvents : function () {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;

        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }
    },
    start: function () {
        this.handleEvents();
        this.render();
    },
};

app.start();
