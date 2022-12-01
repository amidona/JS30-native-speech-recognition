window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; //types it as you are speaking

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("")

        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement("p");
            words.appendChild(p);
        }

        if(transcript.includes("get the weather")) {
            console.log("Getting the weather");
            // This enables the whole "Siri, get the weather" "Getting the weather" (minus the part where the robot voice says their part back to you), but of course the Then part of the if/then could be anything, not necessarily a console.log
        }

});

recognition.addEventListener("end", recognition.start);

recognition.start();
