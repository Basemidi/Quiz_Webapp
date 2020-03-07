
class questions{
    constructor(){
        this.category1 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        this.category2 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        this.category3 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];                          
    }

    getQuestion(cate){

        if(cate == 'category1'){
            var min = 0;
            var max = this.category1.length - 1;
            let random = Math.floor(Math.random()*(max-min+1)+min);

            return this.category1[random];
        }else if(cate == 'category2'){
            var min = 0;
            var max = this.category2.length - 1;
            let random = Math.floor(Math.random()*(max-min+1)+min);
            
            return this.category2[random];
        }else if(cate == 'category3'){
            var min = 0;
            var max = this.category3.length - 1;
            let random = Math.floor(Math.random()*(max-min+1)+min);
            
            return this.category3[random];
        }else{
            return 'Wrong';
        }
    }
}



function moveToCenter(){

    var tar = event.target;
    var ov = document.getElementsByClassName('question');
    
    var q = quest.getQuestion('category1');
    richtig = q[4];

    var questcart = document.getElementsByClassName('quest');
    var answ1 = document.getElementsByClassName('ant1');
    var answ2 = document.getElementsByClassName('ant2');
    var answ3 = document.getElementsByClassName('ant3');
    var categoryname = document.getElementsByClassName('kate');
    var scorediv = document.getElementsByClassName('score');
 

    categoryname[0].innerHTML = tar.innerHTML;
    questcart[0].innerHTML = q[0];
    answ1[0].innerHTML = q[1];
    answ2[0].innerHTML = q[2];
    answ3[0].innerHTML = q[3];
    scorediv[0].innerHTML = q[5];

    tar.firstChild.data = '';
    tar.classList.add("active");
    tar.classList.add("anim1");
    
    setTimeout(function(){ tar.classList.add("anim2");}, 500);
    setTimeout(function(){ tar.classList.add("anim3");}, 1000);
    setTimeout(function(){ ov[0].style.opacity = 1;}, 1200);
    ov[0].style.zIndex = "4";
    
}

function showAnswer(){

    var answerbutton = document.getElementsByClassName("answerbutton");
    var backbutton = document.getElementsByClassName("leavebutton");

    
    answerbutton[0].style.display = "none";
    backbutton[0].style.display = "inherit";

    if(richtig == 1){
        var karte = document.getElementsByClassName('erst');
        karte[0].classList.add("richtig");

    }else if(richtig == 2){
        var karte = document.getElementsByClassName('zwei');
        karte[0].classList.add("richtig");

    }else if(richtig == 3){
        var karte = document.getElementsByClassName('drei');
        karte[0].classList.add("richtig");
    }

}
function backToOverview(){

    var ele = document.getElementsByClassName("active");
    var ov = document.getElementsByClassName('question');
    var categoryname = document.getElementsByClassName('kate');
    var rich = document.getElementsByClassName("richtig");
    var answerbutton = document.getElementsByClassName("answerbutton");
    var backbutton = document.getElementsByClassName("leavebutton");

    
    console.log(ele[0].classList);

    ov[0].style.opacity = 0;

    setTimeout(function(){ ele[0].classList.remove(ele[0].classList[4]);}, 500);
    setTimeout(function(){ ele[0].classList.remove(ele[0].classList[3]);}, 1000);
    setTimeout(function(){ele[0].classList.remove(ele[0].classList[2]);}, 1200);
    
    setTimeout(function(){ele[0].innerHTML = categoryname[0].innerHTML;}, 1500);
    

    setTimeout(function(){ele[0].classList.remove(ele[0].classList[1]);}, 1600);

    setTimeout(function(){rich[0].classList.remove("richtig");}, 1600);
    setTimeout(function(){answerbutton[0].style.display = "inherit";}, 1600);
    setTimeout(function(){backbutton[0].style.display = "none";}, 1600);
    ov[0].style.zIndex = -1;


}


var quest = new questions();
var richtig;



