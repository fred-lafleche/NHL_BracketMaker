function w1(team) {
    var pic;
    if (team == 0) {
        pic = "img/nsh.jpg"
        document.getElementById('tw1').innerHTML="1 NSH"
        document.getElementById('nsh').style.opacity="1";
        document.getElementById('nshT').style.opacity="1";
        document.getElementById('col').style.opacity="0.4";
        document.getElementById('colT').style.opacity="0.4";

    } else {
        pic = "img/col.jpg"
        document.getElementById('tw1').innerHTML="wc COL"
        document.getElementById('nsh').style.opacity="0.4";
        document.getElementById('nshT').style.opacity="0.4";
        document.getElementById('col').style.opacity="1";
        document.getElementById('colT').style.opacity="1";
    }
    document.getElementById('w1').src = pic;
    document.getElementById('w5').src= "img/rien.jpg";
    document.getElementById('tw5').innerHTML="TBD";
    document.getElementById('w7').src= "img/rien.jpg";
    document.getElementById('tw7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";

}

function w2(team) {
    var pic;
    if (team == 0) {
        pic = "img/wpg.jpg"
        document.getElementById('tw2').innerHTML="2 WPG"
        document.getElementById('wpg').style.opacity="1";
        document.getElementById('wpgT').style.opacity="1";
        document.getElementById('min').style.opacity="0.4";
        document.getElementById('minT').style.opacity="0.4";
    } else {
        pic = "img/min.png"
        document.getElementById('tw2').innerHTML="3 MIN"
        document.getElementById('wpg').style.opacity="0.4";
        document.getElementById('wpgT').style.opacity="0.4";
        document.getElementById('min').style.opacity="1";
        document.getElementById('minT').style.opacity="1";
    }
    document.getElementById('w2').src = pic;
    document.getElementById('w5').src= "img/rien.jpg";
    document.getElementById('tw5').innerHTML="TBD";
    document.getElementById('w7').src= "img/rien.jpg";
    document.getElementById('tw7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function w3(team) {
    var pic;
    if (team == 0) {
        pic = "img/vgk.jpg"
        document.getElementById('tw3').innerHTML="1 VGK"
        document.getElementById('vgk').style.opacity="1";
        document.getElementById('vgkT').style.opacity="1";
        document.getElementById('lak').style.opacity="0.4";
        document.getElementById('lakT').style.opacity="0.4";
    } else {
        pic = "img/lak.jpg"
        document.getElementById('tw3').innerHTML="wc LAK"
        document.getElementById('vgk').style.opacity="0.4";
        document.getElementById('vgkT').style.opacity="0.4";
        document.getElementById('lak').style.opacity="1";
        document.getElementById('lakT').style.opacity="1";
    }
    document.getElementById('w3').src = pic;
    document.getElementById('w6').src= "img/rien.jpg";
    document.getElementById('tw6').innerHTML="TBD";
    document.getElementById('w7').src= "img/rien.jpg";
    document.getElementById('tw7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function w4(team) {
    var pic;
    if (team == 0) {
        pic = "img/ana.jpg"
        document.getElementById('tw4').innerHTML="2 ANA"
        document.getElementById('ana').style.opacity="1";
        document.getElementById('anaT').style.opacity="1";
        document.getElementById('sjs').style.opacity="0.4";
        document.getElementById('sjsT').style.opacity="0.4";
    } else {
        pic = "img/sjs.jpg"
        document.getElementById('tw4').innerHTML="3 SJS"
        document.getElementById('ana').style.opacity="0.4";
        document.getElementById('anaT').style.opacity="0.4";
        document.getElementById('sjs').style.opacity="1";
        document.getElementById('sjsT').style.opacity="1";
    }
    document.getElementById('w4').src = pic;
    document.getElementById('w6').src= "img/rien.jpg";
    document.getElementById('tw6').innerHTML="TBD";
    document.getElementById('w7').src= "img/rien.jpg";
    document.getElementById('tw7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function w5(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('w1').src;
    txt=document.getElementById('tw1').innerHTML;
    document.getElementById('w1').style.opacity="1";
    document.getElementById('tw1').style.opacity="1";
    document.getElementById('w2').style.opacity="0.4";
    document.getElementById('tw2').style.opacity="0.4";
  } else {
    pic=document.getElementById('w2').src;
    txt=document.getElementById('tw2').innerHTML;
    document.getElementById('w2').style.opacity="1";
    document.getElementById('tw2').style.opacity="1";
    document.getElementById('w1').style.opacity="0.4";
    document.getElementById('tw1').style.opacity="0.4";
  }
  document.getElementById('w5').src=pic;
  document.getElementById('tw5').innerHTML=txt;
  document.getElementById('w7').src= "img/rien.jpg";
  document.getElementById('tw7').innerHTML="TBD";
  document.getElementById('winner').src= "img/rien.jpg";
  document.getElementById('twinner').innerHTML="TBD";
}

function w6(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('w3').src;
    txt=document.getElementById('tw3').innerHTML;
    document.getElementById('w3').style.opacity="1";
    document.getElementById('tw3').style.opacity="1";
    document.getElementById('w4').style.opacity="0.4";
    document.getElementById('tw4').style.opacity="0.4";
  } else {
    pic=document.getElementById('w4').src;
    txt=document.getElementById('tw4').innerHTML;
    document.getElementById('w4').style.opacity="1";
    document.getElementById('tw4').style.opacity="1";
    document.getElementById('w3').style.opacity="0.4";
    document.getElementById('tw3').style.opacity="0.4";
  }
  document.getElementById('w6').src=pic;
  document.getElementById('tw6').innerHTML=txt;
  document.getElementById('w7').src= "img/rien.jpg";
  document.getElementById('tw7').innerHTML="TBD";
  document.getElementById('winner').src= "img/rien.jpg";
  document.getElementById('twinner').innerHTML="TBD";
}

function w7(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('w5').src;
    txt=document.getElementById('tw5').innerHTML;
    document.getElementById('w5').style.opacity="1";
    document.getElementById('tw5').style.opacity="1";
    document.getElementById('w6').style.opacity="0.4";
    document.getElementById('tw6').style.opacity="0.4";
  } else {
    pic=document.getElementById('w6').src;
    txt=document.getElementById('tw6').innerHTML;
    document.getElementById('w6').style.opacity="1";
    document.getElementById('tw6').style.opacity="1";
    document.getElementById('w5').style.opacity="0.4";
    document.getElementById('tw5').style.opacity="0.4";
  }
  document.getElementById('w7').src=pic;
  document.getElementById('tw7').innerHTML=txt;
  document.getElementById('winner').src= "img/rien.jpg";
  document.getElementById('twinner').innerHTML="TBD";
}

function e1(team) {
    var pic;
    if (team == 0) {
        pic = "img/tbl.png"
        document.getElementById('te1').innerHTML="1 TBL"
        document.getElementById('tbl').style.opacity="1";
        document.getElementById('tblT').style.opacity="1";
        document.getElementById('njd').style.opacity="0.4";
        document.getElementById('njdT').style.opacity="0.4";
    } else {
        pic = "img/njd.jpg"
        document.getElementById('te1').innerHTML="wc NJD"
        document.getElementById('tbl').style.opacity="0.4";
        document.getElementById('tblT').style.opacity="0.4";
        document.getElementById('njd').style.opacity="1";
        document.getElementById('njdT').style.opacity="1";
    }
    document.getElementById('e1').src = pic;
    document.getElementById('e5').src= "img/rien.jpg";
    document.getElementById('te5').innerHTML="TBD";
    document.getElementById('e7').src= "img/rien.jpg";
    document.getElementById('te7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function e2(team) {
    var pic;
    if (team == 0) {
        pic = "img/bos.jpg"
        document.getElementById('te2').innerHTML="2 BOS"
        document.getElementById('bos').style.opacity="1";
        document.getElementById('bosT').style.opacity="1";
        document.getElementById('tor').style.opacity="0.4";
        document.getElementById('torT').style.opacity="0.4";
    } else {
        pic = "img/tor.jpg"
        document.getElementById('te2').innerHTML="3 TOR"
        document.getElementById('bos').style.opacity="0.4";
        document.getElementById('bosT').style.opacity="0.4";
        document.getElementById('tor').style.opacity="1";
        document.getElementById('torT').style.opacity="1";
    }
    document.getElementById('e2').src = pic;
    document.getElementById('e5').src= "img/rien.jpg";
    document.getElementById('te5').innerHTML="TBD";
    document.getElementById('e7').src= "img/rien.jpg";
    document.getElementById('te7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function e3(team) {
    var pic;
    if (team == 0) {
        pic = "img/wsh.png"
        document.getElementById('te3').innerHTML="1 WSH"
        document.getElementById('wsh').style.opacity="1";
        document.getElementById('wshT').style.opacity="1";
        document.getElementById('cbj').style.opacity="0.4";
        document.getElementById('cbjT').style.opacity="0.4";
    } else {
        pic = "img/cbj.jpg"
        document.getElementById('te3').innerHTML="wc CBJ"
        document.getElementById('wsh').style.opacity="0.4";
        document.getElementById('wshT').style.opacity="0.4";
        document.getElementById('cbj').style.opacity="1";
        document.getElementById('cbjT').style.opacity="1";
    }
    document.getElementById('e3').src = pic;
    document.getElementById('e6').src= "img/rien.jpg";
    document.getElementById('te6').innerHTML="TBD";
    document.getElementById('e7').src= "img/rien.jpg";
    document.getElementById('te7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function e4(team) {
    var pic;
    if (team == 0) {
        pic = "img/pit.png"
        document.getElementById('te4').innerHTML="2 PIT"
        document.getElementById('pit').style.opacity="1";
        document.getElementById('pitT').style.opacity="1";
        document.getElementById('phi').style.opacity="0.4";
        document.getElementById('phiT').style.opacity="0.4";
    } else {
        pic = "img/phi.jpg"
        document.getElementById('te4').innerHTML="3 PHI"
        document.getElementById('pit').style.opacity="0.4";
        document.getElementById('pitT').style.opacity="0.4";
        document.getElementById('phi').style.opacity="1";
        document.getElementById('phiT').style.opacity="1";
    }
    document.getElementById('e4').src = pic;
    document.getElementById('e6').src= "img/rien.jpg";
    document.getElementById('te6').innerHTML="TBD";
    document.getElementById('e7').src= "img/rien.jpg";
    document.getElementById('te7').innerHTML="TBD";
    document.getElementById('winner').src= "img/rien.jpg";
    document.getElementById('twinner').innerHTML="TBD";
}

function e5(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('e1').src;
    txt=document.getElementById('te1').innerHTML;
    document.getElementById('e1').style.opacity="1";
    document.getElementById('te1').style.opacity="1";
    document.getElementById('e2').style.opacity="0.4";
    document.getElementById('te2').style.opacity="0.4";
  } else {
    pic=document.getElementById('e2').src;
    txt=document.getElementById('te2').innerHTML;
    document.getElementById('e2').style.opacity="1";
    document.getElementById('te2').style.opacity="1";
    document.getElementById('e1').style.opacity="0.4";
    document.getElementById('te1').style.opacity="0.4";
  }
  document.getElementById('e5').src=pic;
  document.getElementById('te5').innerHTML=txt;
  document.getElementById('e7').src= "img/rien.jpg";
  document.getElementById('te7').innerHTML="TBD";
  document.getElementById('winner').src= "img/rien.jpg";
  document.getElementById('twinner').innerHTML="TBD";
}

function e6(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('e3').src;
    txt=document.getElementById('te3').innerHTML;
    document.getElementById('e3').style.opacity="1";
    document.getElementById('te3').style.opacity="1";
    document.getElementById('e4').style.opacity="0.4";
    document.getElementById('te4').style.opacity="0.4";
  } else {
    pic=document.getElementById('e4').src;
    txt=document.getElementById('te4').innerHTML;
    document.getElementById('e4').style.opacity="1";
    document.getElementById('te4').style.opacity="1";
    document.getElementById('e3').style.opacity="0.4";
    document.getElementById('te3').style.opacity="0.4";
  }
  document.getElementById('e6').src=pic;
  document.getElementById('te6').innerHTML=txt;
  document.getElementById('e7').src= "img/rien.jpg";
  document.getElementById('te7').innerHTML="TBD";
  document.getElementById('winner').src= "img/rien.jpg";
  document.getElementById('twinner').innerHTML="TBD";
}

function e7(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('e5').src;
    txt=document.getElementById('te5').innerHTML;
    document.getElementById('e5').style.opacity="1";
    document.getElementById('te5').style.opacity="1";
    document.getElementById('e6').style.opacity="0.4";
    document.getElementById('te6').style.opacity="0.4";
  } else {
    pic=document.getElementById('e6').src;
    txt=document.getElementById('te6').innerHTML;
    document.getElementById('e6').style.opacity="1";
    document.getElementById('te6').style.opacity="1";
    document.getElementById('e5').style.opacity="0.4";
    document.getElementById('te5').style.opacity="0.4";
  }
  document.getElementById('e7').src=pic;
  document.getElementById('te7').innerHTML=txt;
  document.getElementById('winner').src= "img/rien.jpg";
  document.getElementById('twinner').innerHTML="TBD";
}

function winner(team){
  var pic;
  var txt;
  if (team==0) {
    pic=document.getElementById('w7').src;
    txt=document.getElementById('tw7').innerHTML;
    document.getElementById('w7').style.opacity="1";
    document.getElementById('tw7').style.opacity="1";
    document.getElementById('e7').style.opacity="0.4";
    document.getElementById('te7').style.opacity="0.4";
  } else {
    pic=document.getElementById('e7').src;
    txt=document.getElementById('te7').innerHTML;
    document.getElementById('e7').style.opacity="1";
    document.getElementById('te7').style.opacity="1";
    document.getElementById('w7').style.opacity="0.4";
    document.getElementById('tw7').style.opacity="0.4";
  }
  document.getElementById('winner').src=pic;
  document.getElementById('twinner').innerHTML=txt;
}

function nbrgames(num, id){
  document.getElementById(id).innerHTML=num;
}

// for number of games
function isChecked1(){
  var bool = document.getElementById('chkNum').checked;
  var num = document.getElementsByClassName("num");

  if (bool){
    num[0].style.display="initial";
    num[1].style.display="initial";
    num[2].style.display="initial";
    num[3].style.display="initial";
    num[4].style.display="initial";
    num[5].style.display="initial";
    num[6].style.display="initial";
    num[7].style.display="initial";
    num[8].style.display="initial";
    num[9].style.display="initial";
    num[10].style.display="initial";
    num[11].style.display="initial";
    num[12].style.display="initial";
    num[13].style.display="initial";
    num[14].style.display="initial";
    num[15].style.display="initial";
    num[16].style.display="initial";
    num[17].style.display="initial";
    num[18].style.display="initial";
    num[19].style.display="initial";
    num[20].style.display="initial";
    num[21].style.display="initial";
    num[22].style.display="initial";
    num[23].style.display="initial";
    num[24].style.display="initial";
    num[25].style.display="initial";
    num[26].style.display="initial";
    num[27].style.display="initial";
    num[28].style.display="initial";
    num[29].style.display="initial";
  }
  else{
    num[0].style.display="none";
    num[1].style.display="none";
    num[2].style.display="none";
    num[3].style.display="none";
    num[4].style.display="none";
    num[5].style.display="none";
    num[6].style.display="none";
    num[7].style.display="none";
    num[8].style.display="none";
    num[9].style.display="none";
    num[10].style.display="none";
    num[11].style.display="none";
    num[12].style.display="none";
    num[13].style.display="none";
    num[14].style.display="none";
    num[15].style.display="none";
    num[16].style.display="none";
    num[17].style.display="none";
    num[18].style.display="none";
    num[19].style.display="none";
    num[20].style.display="none";
    num[21].style.display="none";
    num[22].style.display="none";
    num[23].style.display="none";
    num[24].style.display="none";
    num[25].style.display="none";
    num[26].style.display="none";
    num[27].style.display="none";
    num[28].style.display="none";
    num[29].style.display="none";

  }
}

// for random
function isChecked2(){
  var bool = document.getElementById('chkRand').checked;
  var random = document.getElementsByClassName("random");

  if (bool){
    random[0].style.display="initial";
    random[1].style.display="initial";
    random[2].style.display="initial";
    random[3].style.display="initial";
    random[4].style.display="initial";
    random[5].style.display="initial";
    random[6].style.display="initial";
    random[7].style.display="initial";
    random[8].style.display="initial";
    random[9].style.display="initial";
    random[10].style.display="initial";
    random[11].style.display="initial";
    random[12].style.display="initial";
    random[13].style.display="initial";
    random[14].style.display="initial";
  }
  else{
    random[0].style.display="none";
    random[1].style.display="none";
    random[2].style.display="none";
    random[3].style.display="none";
    random[4].style.display="none";
    random[5].style.display="none";
    random[6].style.display="none";
    random[7].style.display="none";
    random[8].style.display="none";
    random[9].style.display="none";
    random[10].style.display="none";
    random[11].style.display="none";
    random[12].style.display="none";
    random[13].style.display="none";
    random[14].style.display="none";

  }
}

// for head to head stats
function isChecked3(){
  var bool = document.getElementById('chkStats').checked;
  var stats= document.getElementsByClassName("stats");

  if (bool){
    stats[0].style.display="initial";
    stats[1].style.display="initial";
    stats[2].style.display="initial";
    stats[3].style.display="initial";
    stats[4].style.display="initial";
    stats[5].style.display="initial";
    stats[6].style.display="initial";
    stats[7].style.display="initial";
    stats[8].style.display="initial";
    stats[9].style.display="initial";
    stats[10].style.display="initial";
    stats[11].style.display="initial";
    stats[12].style.display="initial";
    stats[13].style.display="initial";
    stats[14].style.display="initial";
  }
  else{
    stats[0].style.display="none";
    stats[1].style.display="none";
    stats[2].style.display="none";
    stats[3].style.display="none";
    stats[4].style.display="none";
    stats[5].style.display="none";
    stats[6].style.display="none";
    stats[7].style.display="none";
    stats[8].style.display="none";
    stats[9].style.display="none";
    stats[10].style.display="none";
    stats[11].style.display="none";
    stats[12].style.display="none";
    stats[13].style.display="none";
    stats[14].style.display="none";

  }
}

// for conn smythe winner
function isChecked4(){
  var bool = document.getElementById('chkSmythe').checked;
  var img= document.getElementById('smytheImg');
  var pnl = document.getElementById('smythePanel');

  if (bool){
    img.style.display="initial";
    pnl.style.display="initial";
  }
  else{
    img.style.display="none";
    pnl.style.display="none";
  }
}

function stats1(){
  var team1=document.getElementById('nshT').innerHTML;
  var team2=document.getElementById('colT').innerHTML;
  document.getElementById('team1').src=document.getElementById('nsh').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('col').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats2(){
  var team1=document.getElementById('wpgT').innerHTML;
  var team2=document.getElementById('minT').innerHTML;
  document.getElementById('team1').src=document.getElementById('wpg').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('min').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats3(){
  var team1=document.getElementById('vgkT').innerHTML;
  var team2=document.getElementById('lakT').innerHTML;
  document.getElementById('team1').src=document.getElementById('vgk').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('lak').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats4(){
  var team1=document.getElementById('anaT').innerHTML;
  var team2=document.getElementById('sjsT').innerHTML;
  document.getElementById('team1').src=document.getElementById('ana').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('sjs').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats5(){
  var team1=document.getElementById('tw1').innerHTML;
  var team2=document.getElementById('tw2').innerHTML;
  document.getElementById('team1').src=document.getElementById('w1').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('w2').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats6(){
  var team1=document.getElementById('tw3').innerHTML;
  var team2=document.getElementById('tw4').innerHTML;
  document.getElementById('team1').src=document.getElementById('w3').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('w4').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats7(){
  var team1=document.getElementById('tw5').innerHTML;
  var team2=document.getElementById('tw6').innerHTML;
  document.getElementById('team1').src=document.getElementById('w5').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('w6').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats8(){
  var team1=document.getElementById('tw7').innerHTML;
  var team2=document.getElementById('te7').innerHTML;
  document.getElementById('team1').src=document.getElementById('w7').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('e7').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats9(){
  var team1=document.getElementById('te5').innerHTML;
  var team2=document.getElementById('te6').innerHTML;
  document.getElementById('team1').src=document.getElementById('e5').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('e6').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats10(){
  var team1=document.getElementById('te1').innerHTML;
  var team2=document.getElementById('te2').innerHTML;
  document.getElementById('team1').src=document.getElementById('e1').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('e2').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats11(){
  var team1=document.getElementById('te3').innerHTML;
  var team2=document.getElementById('te4').innerHTML;
  document.getElementById('team1').src=document.getElementById('e3').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('e4').src;
  document.getElementById('team2T').innerHTML=team2


  fillStats(team1, team2);
}

function stats12(){
  var team1=document.getElementById('tblT').innerHTML;
  var team2=document.getElementById('njdT').innerHTML;
  document.getElementById('team1').src=document.getElementById('tbl').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('njd').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats13(){
  var team1=document.getElementById('bosT').innerHTML;
  var team2=document.getElementById('torT').innerHTML;
  document.getElementById('team1').src=document.getElementById('bos').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('tor').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats14(){
  var team1=document.getElementById('wshT').innerHTML;
  var team2=document.getElementById('cbjT').innerHTML;
  document.getElementById('team1').src=document.getElementById('wsh').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('cbj').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function stats15(){
  var team1=document.getElementById('pitT').innerHTML;
  var team2=document.getElementById('phiT').innerHTML;
  document.getElementById('team1').src=document.getElementById('pit').src;
  document.getElementById('team1T').innerHTML=team1
  document.getElementById('team2').src=document.getElementById('phi').src;
  document.getElementById('team2T').innerHTML=team2

  fillStats(team1, team2);
}

function fillStats(team1, team2){
    for(i = 0; i < myArray.length; i++) {

        if (myArray[i].display==team1) {
          document.getElementById('goal1').innerHTML=myArray[i].goalsfor;
          document.getElementById('gagainst1').innerHTML=myArray[i].goalsagainst;
          document.getElementById('pp1').innerHTML=myArray[i].pp;
          document.getElementById('pk1').innerHTML=myArray[i].pk;
          document.getElementById('place1').innerHTML=myArray[i].place;
        }

      else if (myArray[i].display==team2) {
          document.getElementById('goal2').innerHTML=myArray[i].goalsfor;
          document.getElementById('gagainst2').innerHTML=myArray[i].goalsagainst;
          document.getElementById('pp2').innerHTML=myArray[i].pp;
          document.getElementById('pk2').innerHTML=myArray[i].pk;
          document.getElementById('place2').innerHTML=myArray[i].place;
        }

    }

    if (document.getElementById('goal1').innerHTML > document.getElementById('goal2').innerHTML) {
      document.getElementById('goal1').style="font-weight:bold";
      document.getElementById('goal2').style="font-weight:normal";
    }
    else if (document.getElementById('goal1').innerHTML < document.getElementById('goal2').innerHTML) {
      document.getElementById('goal2').style="font-weight:bold";
      document.getElementById('goal1').style="font-weight:nomral";
    }

    if (document.getElementById('gagainst1').innerHTML<document.getElementById('gagainst2').innerHTML) {
      document.getElementById('gagainst1').style="font-weight:bold";
      document.getElementById('gagainst2').style="font-weight:normal";
    }
    else if (document.getElementById('gagainst1').innerHTML > document.getElementById('gagainst2').innerHTML) {
      document.getElementById('gagainst2').style="font-weight:bold";
      document.getElementById('gagainst1').style="font-weight:normal";
    }
    if (document.getElementById('pp1').innerHTML > document.getElementById('pp2').innerHTML) {
      document.getElementById('pp1').style="font-weight:bold";
      document.getElementById('pp2').style="font-weight:normal";
    }
    else if (document.getElementById('pp1').innerHTML < document.getElementById('pp2').innerHTML) {
      document.getElementById('pp2').style="font-weight:bold";
      document.getElementById('pp1').style="font-weight:normal";
    }

    if (document.getElementById('pk1').innerHTML > document.getElementById('pk2').innerHTML) {
      document.getElementById('pk1').style="font-weight:bold";
      document.getElementById('pk2').style="font-weight:normal";
    }
    else if (document.getElementById('pk1').innerHTML < document.getElementById('pk2').innerHTML) {
      document.getElementById('pk2').style="font-weight:bold";
      document.getElementById('pk1').style="font-weight:normal";
    }

    if (Number(document.getElementById('place1').innerHTML) > Number(document.getElementById('place2').innerHTML)) {
      document.getElementById('place1').style="font-weight:normal";
      document.getElementById('place2').style="font-weight:bold";
    }
    else if (Number(document.getElementById('place1').innerHTML) < Number(document.getElementById('place2').innerHTML)) {
      document.getElementById('place1').style="font-weight:bold";
      document.getElementById('place2').style="font-weight:normal";
    }




}

function enter(){
  var input = document.getElementById("name").value;
  localStorage.setItem("bracketname", input);
}

function printOrNotToPrint(){
  var completeW= (document.getElementById('tw1').innerHTML != "TBD") && (document.getElementById('tw2').innerHTML != "TBD") && (document.getElementById('tw3').innerHTML != "TBD") &&
                 (document.getElementById('tw4').innerHTML != "TBD") && (document.getElementById('tw5').innerHTML != "TBD") &&
                 (document.getElementById('tw6').innerHTML != "TBD") && (document.getElementById('tw7').innerHTML != "TBD");
  var completeE= (document.getElementById('te1').innerHTML != "TBD") && (document.getElementById('te2').innerHTML != "TBD") && (document.getElementById('te3').innerHTML != "TBD") &&
                 (document.getElementById('te4').innerHTML != "TBD") && (document.getElementById('te5').innerHTML != "TBD") &&
                 (document.getElementById('te6').innerHTML != "TBD") && (document.getElementById('te7').innerHTML != "TBD");
  var winner=document.getElementById('twinner').innerHTML != "TBD";
  if (completeW && completeE && winner){
    window.print()
  }else{
    $('#notComplete').modal('show')
  }
}

var myArray = [
  {
  "display": "1 NSH",
  "goalsfor": "261",
  "goalsagainst": "204",
  "pp": "21.2",
  "pk": "81.9",
  "place" : "2"
  },
  {
  "display": "wc COL",
  "goalsfor": "255",
  "goalsagainst": "236",
  "pp": "21.9",
  "pk": "83.3",
  "place" : "30"
  },
{
"display": "2 WPG",
"goalsfor": "273",
"goalsagainst": "216",
"pp": "23.4",
"pk": "81.8",
"place" : "20"
},
{
"display": "3 MIN",
"goalsfor": "250",
"goalsagainst": "229",
"pp": "20.4",
"pk": "81.3",
"place" : "13"
},
{
"display": "1 VGK",
"goalsfor": "268",
"goalsagainst": "225",
"pp": "21.4",
"pk": "81.4",
"place" : "N/A"
},
{
"display": "wc LAK",
"goalsfor": "237",
"goalsagainst": "202",
"pp": "20.4",
"pk": "85.0",
"place" : "22"
},
{
"display": "2 ANA",
"goalsfor": "231",
"goalsagainst": "209",
"pp": "17.8",
"pk": "83.2",
"place" : "4"
},
{
"display": "3 SJS",
"goalsfor": "247",
"goalsagainst": "226",
"pp": "20.6",
"pk": "84.8",
"place" : "10"
},
{
"display": "1 TBL",
"goalsfor": "290",
"goalsagainst": "234",
"pp": "23.9",
"pk": "76.1",
"place" : "17"
},
{
"display": "wc NJD",
"goalsfor": "243",
"goalsagainst": "240",
"pp": "21.4",
"pk": "81.8",
"place" : "28"
},
{
"display": "2 BOS",
"goalsfor": "267",
"goalsagainst": "211",
"pp": "23.5",
"pk": "83.7",
"place" : "9"
},
{
"display": "3 TOR",
"goalsfor": "270",
"goalsagainst": "230",
"pp": "25.0",
"pk": "81.4",
"place" : "11"
},
{
"display": "1 WSH",
"goalsfor": "256",
"goalsagainst": "238",
"pp": "22.5",
"pk": "80.3",
"place" : "5"
},
{
"display": "wc CBJ",
"goalsfor": "236",
"goalsagainst": "226",
"pp": "17.2",
"pk": "76.2",
"place" : "14"
},
{
"display": "2 PIT",
"goalsfor": "270",
"goalsagainst": "248",
"pp": "26.2",
"pk": "80.0",
"place" : "1"
},
{
"display": "3 PHI",
"goalsfor": "249",
"goalsagainst": "236",
"pp": "20.7",
"pk": "75.8",
"place" : "19"
}
];
