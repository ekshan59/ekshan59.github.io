function chas(){
    var vreme= new Date();
    var hh = vreme.getHours();
    var mm = vreme.getMinutes();
    var ss = vreme.getSeconds();
    if( hh <=9 ) hh = "0"+hh;
    if( mm <=9 ) mm = "0"+mm;
    if( ss <=9 ) ss = "0"+ss;
    document.getElementById('time').innerHTML= hh+":"+mm+":"+ss;
    window.setTimeout("chas()",1000);
    }
