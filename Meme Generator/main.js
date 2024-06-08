const generateMemeBtn = document.querySelector(".meme-btn")
const memeImg = document.querySelector(".meme-generator img")
const memeTitle = document.querySelector(".meme-title")
const memeAuthor = document.querySelector(".meme-author")

//For generating meme :-

    const updateDetails = (url, title, author)=>{
        memeImg.setAttribute("src",url)
        memeTitle.innerHTML = title
        memeAuthor.innerHTML = author
    }

    const generateMeme = () =>{
        fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then(data =>{
            updateDetails(data.url, data.title, data.author)
        })
    } 

generateMemeBtn.addEventListener("click", generateMeme)