const masonry = new Macy({
    container: 'div.masonry',
    mobileFirst: true,
    columns: 2,
    breakAt: {
        600: 3,

    },
    margin: {
        x: 20,
        y: 20
    }

})

let loader = document.querySelector(".loading-screen")
let ready = document.querySelector(".loading-screen p")
let masonryContainer = document.querySelector(".masonry")

ready.addEventListener("click", () => {
    loader.classList.toggle("active");
    masonryContainer.style.display = "block"
    masonry.recalculate();


})






let photos = [...document.querySelectorAll(".masonry img")]
let audio = document.querySelector("#audioID")
const audioAdd = () => {
    const audioChanger = () => {
        let audioNumber = Math.floor(Math.random() * 48);
        let audioFinalSource = `audio/glitch${audioNumber}.wav`
        return audioFinalSource;
    }
    document.getElementById("audioID").setAttribute('src', `${audioChanger()}`);
    audio.play();
}

photos.forEach(img => {
    img.addEventListener("mouseover", audioAdd)

});