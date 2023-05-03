function start(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4TwAu7ng9/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log("Results recieved");
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb("+ r + ","+ b +"," + g +")";
        document.getElementById("result_confidence").style.color = "rgb("+ r + ","+ b +"," + g +")";

        img1 = document.getElementById("defult");
    }

    if (results[0].label == "Barking") {
        img1.src = "dog.png";
    }
    else if (results[0].label == "Meowing") {
        img1.src = "cat.png";
    }
    else if (results[0].label == "Mooing") {
        img1.src = "cow.png";
    }
    else if (results[0].label == "Roar") {
        img1.src = "lion.png";
    }
    else{
        img1.src = "defult.jpg";

    }
  
}