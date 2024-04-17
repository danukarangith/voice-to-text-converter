var isListening = false;
var recognition; 

 
click_to_record.addEventListener('click', function(){
    isListening = !isListening;

    
    if (isListening) {
        startSpeechRecognition();
    } else {
        stopSpeechRecognition();
    }
});

 
function startSpeechRecognition() {
    window.SpeechRecognition = window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);
    });

    recognition.start();
}

 
function stopSpeechRecognition() {
     recognition.stop();
}
