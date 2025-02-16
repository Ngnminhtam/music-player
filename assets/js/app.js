const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = $(".player");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const progress = $("#progress");
const app = {
    currentIndex: 0,
    isPlaying: false,
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
        const htmls = this.songs.map((song) => {
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
            </div>`;
        });
        $(".playlist").innerHTML = htmls.join("");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvents: function () {
        _this = this;
        const cdWidth = cd.offsetWidth;

        //Xu ly CD quay / dung
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, //10 seconds
            iterations: Infinity,
        });
        cdThumbAnimate.pause();

        //Xu ly phong to / thu nho CD
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        //Xu ly khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        //Khi song duoc play
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };

        //Khi song bi pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration) * 100;
                progress.value = progressPercent;
            }
        };

        //Xu ly khi tua song
        progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        };

        //Khi next song
        nextBtn.onclick = function () {
            _this.nextSong();
            audio.play();
        }

        //Khi prev song
        prevBtn.onclick = function () {
            _this.prevSong();
            audio.play();
        }
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    start: function () {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();
    },
};

app.start();
