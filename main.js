function _(id) {
    return document.getElementById(id)
}

const bold = _('bold');
const italic = _('italic');
const underline = _('underline');
const left = _('left');
const center = _('center');
const right = _('right');
const text = _('text-area');
const align = _('align');
const color = _('color');
const style = _('style');
const fontS = _('font-size');
const fontF = _('font-family');
const capCase = _('capCase');
const smaCase = _('smaCase');
const senCase = _('senCase');
const speaking = _('speak');
const tune = _('voices');


// .style.backgroundColor = 'red';


/*=======================================================================*/


// Text Stylings
italic.addEventListener('click', () => {
    document.execCommand('italic')
});
bold.addEventListener('click', () => {
    document.execCommand('bold')
});
underline.addEventListener('click', () => {
    document.execCommand('underline')
});
// Toogle Selection for Text Stylings
style.addEventListener('click', (e) => {
    let target = e.target;
    target.classList.toggle('black');
});


/*=======================================================================*/


// Text Alignments
left.addEventListener('click', () => {
    document.execCommand('justifyLeft')
});
center.addEventListener('click', () => {
    document.execCommand('justifyCenter')
});
right.addEventListener('click', () => {
    document.execCommand('justifyRight')
});
// Toogle Selection for Text Alignments
align.addEventListener('click', (e) => {
    let target = e.target;
    target.classList.toggle('black');
});


/*=======================================================================*/


// Text Cases
capCase.addEventListener('click', () => {
    text.innerHTML = text.innerHTML.toUpperCase()
});
smaCase.addEventListener('click', () => {
    text.innerHTML = text.innerHTML.toLowerCase()
});
senCase.addEventListener('click', () => {
    text.innerHTML = text.innerHTML.charAt(0).toUpperCase()
});




// Color Picker
color.addEventListener('input', () => {
    document.execCommand('foreColor', false, color.value)
});



// Font Family
fontF.addEventListener('change', (e) => {
    document.execCommand('fontName', false, fontF.value)
});
// Font Size
fontS.addEventListener('change', (e) => {
    document.execCommand('fontSize', false, fontS.value)
});

// document.addEventListener('keypress', (e) => {
//     if (e.key === ' ') {
//         text.innerHTML = text.innerHTML.replace(text.innerHTML[0], text.innerHTML[0].toUpperCase())
//         // e.preventDefault();
//         // document.execCommand('insertHTML', false, '&nbsp;')
//     }
// });



// =================================================================== //
// Speech to Text

let speech = new SpeechSynthesisUtterance();

speech.lang = "en";

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();

    speech.voice = voices[0];


    let voiceSelect = tune;
    // for (let i = 0; i < voices.length; i++) {
    //     let option = document.createElement('option');
    //     option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    //     tune.appendChild(option)
    // }
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

tune.addEventListener("change", () => {
    speech.voice = voices[tune.value];
});

speaking.addEventListener("click", () => {

    speech.text = text.innerHTML;
    console.log(text.innerHTML)


    window.speechSynthesis.speak(speech);
});





