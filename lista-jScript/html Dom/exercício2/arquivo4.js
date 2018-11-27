function getAttributes(){
    document.getElementById("label1").innerHTML = document.getElementsByTagName("a")[0].getAttribute("hreflang");
    document.getElementById("label2").innerHTML = document.getElementsByTagName("a")[0].getAttribute("rel");
    document.getElementById("label3").innerHTML = document.getElementsByTagName("a")[0].getAttribute("target");
    document.getElementById("label4").innerHTML = document.getElementsByTagName("a")[0].getAttribute("href");
}