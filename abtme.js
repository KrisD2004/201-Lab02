let person = prompt("Enter your name")
alert(`Nice to meet you ${person}!`)

function quiz () {
    
   let qs = prompt("Is it true I want to get into game development");
   let qslow = qs.toLowerCase()
    if ( qslow === true )
        alert("Correct!")
    else {
        alert("incorrect")
    }
   
   let edu = prompt("Is it true I graduted highschool in 2022");
   let edulow = edu.toLowerCase()
    if (edulow === "true")
     alert("Correct!")
   else {
     alert("incorrect")
   }

   let sd = prompt("Is is false that i hate software developing");
   let sdlow = sd.toLowerCase()
    if (sdlow === "true")
     alert("Correct")
   else {
     alert("incorrect")
   }

   let comp = prompt("Is it true Kristian wants to work for a big company");
   let complow = comp.toLowerCase()
    if (complow === "true")
     alert("Correct")
   else {
     alert("incorrect")
   }

   let grad = prompt("Is it true that Kristian graduates code crew in 2023");
   let gradlow = grad.toLowerCase()
    if (gradlow === "true")
     alert("Correct")
   else {
     alert("incorrect")
   }
}