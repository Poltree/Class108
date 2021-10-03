//https://teachablemachine.withgoogle.com/models/ONVXkhMLh/

function startClassification(){
    navigator.mediaDevices.getUserMedia();
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ONVXkhMLh/model.json', modelready);

}
function modelready(){
    classifier.classify(gotresult);
}
function gotresult(error, results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);

variable_r = Math.floor(Math.random()*255) + 1 
variable_g = Math.floor(Math.random()*255) + 1 
variable_b = Math.floor(Math.random()*255) + 1 


document.getElementById("result_label").style.color = "rgb("+variable_r+" , "+variable_g+" , "+variable_b+")"
document.getElementById("result_confidence").style.color = "rgb("+variable_r+" , "+variable_g+" , "+variable_b+")"

        document.getElementById("result_label").innerHTML = "I Can Hear " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy" + " " + (results[0].confidence * 100).toFixed(2) + " %"


        image_1 = document.getElementById("alien1");
        image_2 = document.getElementById("alien2");
        image_3 = document.getElementById("alien3");
        image_4 = document.getElementById("alien4");

        if (results[0].label == "Clap"){
            image_1.src = "aliens-01.png"
            image_2.src = "aliens-02.png"
            image_3.src = "aliens-03.gif"
            image_4.src = "aliens-04.png"
            
        }
        else if (results[0].label == "Background Noise"){
            image_1.src = "aliens-01.gif"
            image_2.src = "aliens-02.png"
            image_3.src = "aliens-03.png"
            image_4.src = "aliens-04.png"
        }
        else if (results[0].label == "Snap"){
            image_1.src = "aliens-01.png"
            image_2.src = "aliens-02.gif"
            image_3.src = "aliens-03.png"
            image_4.src = "aliens-04.png"
        }
        else {
            image_1.src = "aliens-01.png"
            image_2.src = "aliens-02.png"
            image_3.src = "aliens-03.png"
            image_4.src = "aliens-04.gif"
        }
    }
}