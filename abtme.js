let person = prompt("Enter your name")
alert(`Nice to meet you ${person}!`)


function quiz () {
    let x = 0

   let qs = prompt("Is it true I want to get into game development");
   let qslow = qs.toLowerCase()
    if ( qslow === true ){
        alert("Correct!") 
        x ++;}
    else {
        alert("incorrect")
    }
    
   
   let edu = prompt("Is it true I graduted highschool in 2022");
   let edulow = edu.toLowerCase()
    if (edulow === "true"){
     alert("Correct!")
      x ++;}
   else {
     alert("incorrect")
   }
   

   let sd = prompt("Is is false that i hate software developing");
   let sdlow = sd.toLowerCase()
    if (sdlow === "true"){
     alert("Correct")
     x ++;}
   else {
     alert("incorrect")
   }

   let comp = prompt("Is it true Kristian wants to work for a big company");
   let complow = comp.toLowerCase()
    if (complow === "true"){
     alert("Correct")
     x++;}
   else {
     alert("incorrect")
   }

   let grad = prompt("Is it true that Kristian graduates code crew in 2023");
   let gradlow = grad.toLowerCase()
    if (gradlow === "true"){
     alert("Correct")
     x ++;}
     //console.log(x)
     //console.log("correct")
   else {
     alert("incorrect")
     //console.log(x)
     //console.log("incorrect")
   }

   let choice = prompt("how many months until code school is over?")
    if (choices[i].checked) {
      choice = choices[i].value;
      if (choice == questions[pos][6]) {
        alert("correct");
        correct++;
        tries = 4;
        pos++;
      } else if (choice != questions[pos][6] && tries < 4) {
        tries++;
        console.log("tries =" + tries);
        alert("try again");
      } else if (choice != question[pos][6] && tries >= 4) {
        alert("incorrect");
      }
    }

 alert(`Yay! ${person} you scored a 4 out of 5 questions`)


}