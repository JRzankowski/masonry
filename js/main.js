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


let photos = [...document.querySelectorAll(".masonry img")]



let audio = document.querySelector("#audioID")

//Example of an HTML Audio/Video Method

const audioAdd = () => {
    const audioChanger = () => {
        let audioNumber = Math.floor(Math.random() * 52);
        let audioFinalSource = `audio/glitch${audioNumber}.wav`
        return audioFinalSource;
    }


    document.getElementById("audioID").setAttribute('src', `${audioChanger()}`);
    audio.play();
}

photos.forEach(img => {
    img.addEventListener("mouseover", audioAdd)

});