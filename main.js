var com_skor = 0;
var player_skor = 0;
var submit = document.getElementById('submitBtn');
submit.addEventListener('click', function() {
   // variabel players
   var player_select = document.getElementById('user_select').value;
   var player = document.getElementById('player');
   var com_select = Math.random();
   var computer = document.getElementById('com');

   // variabel content
   var content = document.getElementById('hasil');
   
   // Computer selected rules
   if(com_select <= 0.34) {
      com_select = 'batu';
   } else if(com_select >= 0.34 && com_select >= 0.67) {
      com_select = 'gunting';
   } else {
      com_select = 'kertas'
   }
   computer.innerHTML = com_select;
   computer.style.textTransform = 'capitalize';
   
   // Player rules
   var hasil = '';
   var notes = document.getElementById('note');
   
   if(player_select == com_select) {
      hasil = 'SERI'
   } else if(player_select == 'batu') {
      hasil = (com_select == 'kertas' ) ? 'Com MENANG' : 'Kamu MENANG';
   } else if(player_select == 'gunting') {
      hasil = (com_select == 'batu') ? 'Com MENANG' : 'Kamu MENANG';
   } else if(player_select == 'kertas') {
      hasil = (com_select == 'batu') ? 'Kamu MENANG' : 'Com MENANG';
   } else {
      '';
   }
   notes.innerHTML = hasil;
   player.innerHTML = player_select;
   player.style.textTransform = 'capitalize';
   
   
   var skor_kamu = document.getElementById('skor-kamu');
   var skor_com = document.getElementById('skor-com');
   if(hasil == 'Kamu MENANG') {
      player_skor++;
      skor_kamu.innerHTML = player_skor;
   } else if(hasil == 'SERI') {
      '';
   } else {
      com_skor++;
      skor_com.innerHTML = com_skor;
   }
   /*skor_kamu.innerHTML = skor;
   skor_com.innerHTML = skor;*/
   // show result content
   if( content.style.display = 'none' ) {
      content.style.display = 'block';
   } else {
      content.style.display = 'none';
   }
   
})