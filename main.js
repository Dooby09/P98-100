speech_recognition=window.webkitSpeechRecognition;
recognition=new speech_recognition();

function start(){

    document.getElementById("textarea1").value="";
    recognition.start();

}
recognition.onresult=function(event){

    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textarea1").value=content;
    if (content=="selfie"){
        speak();
     }
    
}

function speak(){

    synth=window.speechSynthesis;
    /*saythis=new SpeechSynthesisUtterance(document.getElementById("textarea1").value);*/
    Webcam.attach(camera);
    saythis=new SpeechSynthesisUtterance("taking your selfie in 5 seconds");
    synth.speak(saythis);
    setTimeout(function(){
        imgnumber=1;
        takesnapshot();
        save();
        saythis=new SpeechSynthesisUtterance("taking your selfie in 10 seconds");
        synth.speak(saythis);
    },5000);
    setTimeout(function(){
        imgnumber=2;
        takesnapshot();
        save();
        saythis=new SpeechSynthesisUtterance("taking your selfie in 15 seconds");
        synth.speak(saythis);
    },10000);
   setTimeout(function(){
        imgnumber=3;
        takesnapshot();
        save();
    },15000);
}

camera=document.getElementById("camera");
Webcam.set({

    width:360,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
    
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        if (imgnumber==1){
            document.getElementById("result1").innerHTML="<img id='photo' src=" + data_uri + ">";
        }
        if (imgnumber==2){
            document.getElementById("result2").innerHTML="<img id='photo' src=" + data_uri + ">";
        }
        if (imgnumber==3){
            document.getElementById("result3").innerHTML="<img id='photo' src=" + data_uri + ">";
        }
    })
}

function save(){

    link=document.getElementById("link");
    img=document.getElementById("photo").src;
    link.href=img;
    link.click();

}
