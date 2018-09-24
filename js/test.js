function test_quiz(){

       var rightAnswer1 = $("input:radio[name=questions1]:checked").val();
       var rightAnswer2 = $("input:radio[name=questions2]:checked").val();
       var rightAnswer3 = $("input:radio[name=questions3]:checked").val();
       var rightAnswer4 = $("input:radio[name=questions4]:checked").val();
       var rightAnswer5 = $("input:radio[name=questions5]:checked").val();

       var summedScore = 0;

   if(rightAnswer1 == "javascript"){
     summedScore += 10
   }
   else {
     summedScore += 0
   }

   if(rightAnswer2 == "script"){
     summedScore+= 10;
   }
   else {
     summedScore += 0;
   }
   if(rightAnswer3 == "the head section"){
     summedScore += 10;
   }
   else {
     summedScore += 0;
   }
   if(rightAnswer4 =="false"){
     summedScore += 10;
   }
   else {
     summedScore += 0;
   }
   if(rightAnswer5 == "function myFunction()"){
     summedScore += 10;
   }
   else {
     summedScore += 0;
   }

   alert(summedScore);


 }
