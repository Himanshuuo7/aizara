let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerHTML=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir what can i help you?")
    }
    else if(message.includes("who are you")||message.includes("hu r u")){
        speak("i am virtual assistant ,created by Himanshu sir")
    }else if(message.includes("who is himanshu sir")||message.includes("hu is himanshu sir")){
        speak("this is himanshu sir")
        window.open("https://www.linkedin.com/in/himanshu-sonkusre-350661306/")
    }else if(message.includes("How are you")||message.includes("how r u")){
        speak("i am okey thank you for asking")
    }else if(message.includes("How are you")||message.includes("how r u")){
        speak("i am ok thank you for asking")
    }else if(message.includes("what are you doing")||message.includes("what r u doing")){
        speak("Just being with you")
    }else if(message.includes("open youtube")){
        speak("open in youtube..")
        window.open("https://www.youtube.com/","_blank")
    }else if(message.includes("open google")){
        speak("open in google..")
        window.open("https://www.google.co.in/","_blank")
    }else if(message.includes("open facebook")){
        speak("open in facebook...")
        window.open("https://www.facebook.com/","_blank")
    }else if(message.includes("open instagram")){
        speak("open in instagram...")
        window.open("https://www.instagram.com/","")
    }else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("play arijit singh song")){
        window.open("https://www.youtube.com/watch?v=bVb5USv-cxM")
        speak("playing arijit singh song...")
    }else if(message.includes("play king song")){
        window.open("https://www.youtube.com/watch?v=1A7Gdc3YVno")
        speak("playing king song...")
    }
    else if(message.includes("play neha kakkar song")){
        window.open("https://www.youtube.com/watch?v=Mi_NZVns1Ow")
        speak("playing neha kakkar song...")
    }else if(message.includes("play old song")||message.includes("play 90's song")){
        window.open("https://www.youtube.com/watch?v=sCIiVN0zIGE")
        speak("playing old song...")
    }else if(message.includes("play new song")){
        window.open("https://www.youtube.com/watch?v=m9wpOgOCl8M")
        speak("playing new song...")
    }else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
    }else{
        let finalText="this is what i found on internet regarding" + message.replace("zara","")||message.replace("jara","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Zara","")}`,"")
    }

}


