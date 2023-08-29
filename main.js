const editableInput = document.querySelector(".editable");
// console.log(editableInput)

const placeHoler = document.querySelector(".placeholder");
// console.log(placeHoler)

const counter = document.querySelector(".counter");
// console.log(counter)

const tweetButton = document.querySelector(".button");

const readonly = document.querySelector(".readonly");
// console.log(readonly)

editableInput.onfocus = () => {
  placeHoler.style.color = "#c5ccd3";
};


editableInput.addEventListener('blur',()=>{
  placeHoler.style.color='#98a5b1'
})

// klavye etkinligini yakalamak için

editableInput.onkeyup = (e) => {
  // placeHoler.style.display='flex'
  validateTweet(e.target);
};

const validateTweet = (element) => {
  let text;
  let tweetlimit = 5;
  let tweetLength = element.innerText.length;
  console.log(tweetLength);

  if (tweetLength <= 0) {
    placeHoler.style.display = "block";
    counter.style.display = "none";
    tweetButton.classList.remove("active");
  } else {
    tweetButton.classList.add("active");
    counter.style.display = "block";
    placeHoler.style.display = "none";
  }
  counter.innerText = tweetlimit - tweetLength;

  if (tweetLength > tweetlimit) {
    let overText = element.innerText.substr(tweetlimit, tweetLength);
    // console.log(overText)

    overText = `<span class="overSpan">${overText}</span>`;
    text = element.innerText.substr(0, tweetlimit) + overText;
    readonly.style.zIndex = "1";

    tweetButton.classList.remove("active");

    counter.style.color = "#e0245e";
  } else {
    counter.style.color = "#333";
  }

  readonly.innerHTML = text;
};
