
class questions{
    constructor(){
        //Allgemeinwissen
        this.category1 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        //Wissenschaft & Technik
        this.category2 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        //Geschichte
        this.category3 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        //Sport
        this.category4 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        //Serien & Filme
        this.category5 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        //Musik
        this.category6 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];
        //Schnooke
        this.category7 = [['Frage1', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50],
                            ['Frage2', 'Antwort1', 'Antwort2', 'Antwort3', 3, 50]];                        
    }

    getQuestion(cate){

        if(cate == 'Allgemeinwissen'){
            return this.category1.pop();

        }else if(cate == 'Wissenschaft &amp; Technik'){
            return this.category2.pop();

        }else if(cate == 'Geschichte'){
            return this.category3.pop();

        }else if(cate == 'Sport'){
            return this.category4.pop();

        }else if(cate == 'Serien &amp; Filme'){
            return this.category5.pop();

        }else if(cate == 'Musik'){
            return this.category6.pop();

        }else if(cate == 'Schnooke'){
            return this.category7.pop();
            
        }else{
            return "wrong";
        }
    }
}



function moveToCenter(){

    var tar = event.target;
    var cate = tar.innerHTML;
    var ov = document.getElementsByClassName('question');
    
    var q = quest.getQuestion(tar.innerHTML);
    richtig = q[4];
 
    var questcart = document.getElementsByClassName('quest');
    var answ1 = document.getElementsByClassName('ant1');
    var answ2 = document.getElementsByClassName('ant2');
    var answ3 = document.getElementsByClassName('ant3');
    var categoryname = document.getElementsByClassName('kate');
    var scorediv = document.getElementsByClassName('score');
    var whichclass = 'anim1';

    if (cate == 'Geschichte' || cate == 'Sport' || cate == 'Schnooke'){
        whichclass = 'animleft';
    }

    categoryname[0].innerHTML = tar.innerHTML;
    questcart[0].innerHTML = q[0];
    answ1[0].innerHTML = q[1];
    answ2[0].innerHTML = q[2];
    answ3[0].innerHTML = q[3];
    scorediv[0].innerHTML = q[5];



    tar.firstChild.data = '';
    tar.classList.add("active");
    tar.classList.add(whichclass);
    
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



