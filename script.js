
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
    tar.firstChild.data = '';
    
    tar.classList.add("anim1");
    
    setTimeout(function(){ tar.classList.add("anim2");}, 500);
    setTimeout(function(){ tar.classList.add("anim3");}, 1000);
    setTimeout(function(){ ov[0].style.opacity = 1;}, 1200);
    ov[0].style.zIndex = "4";
    
}


var quest = new questions();



