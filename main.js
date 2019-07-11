// document.querySelector('form').addEventListener('submit',medical)
// //each elements will have their own event
//
//
// //OPEN fda: https://api_basics.fda.gov/drug/event.json?api_key=yourAPIKeyHere&search=
// //API KEY is:18M39HhK9MPfUt0Xkc3uZdKmx2xztZyi3JKbyyyZ
//
// function medical(e){     //e stands for event, an element in each e, e prevents default
//   e.preventDefault()  //e.preventDefaults prevents all the events from reload
//   let drugName = document.querySelector('input').value
//   console.log(drugName)
//   fetch(`https://api.fda.gov/drug/event.json?search=report_date:[20040101+TO+20131231]&limit=1`)
//   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//   .then(response => {
//     console.log(response);
//     document.querySelector('p').textContent = response.meta.disclaimer;
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//     alert("sorry, there are no results for your search")
//   })
// }

//what do we want to do
//What is the adverse event of the drug?
//Has this drug been recalled before?

//what is the manufacturer name of this drug?


//new try after Nick help + Leon help
//for annonymous function, remember that it is a function without a name, it can be placed upward and become an additional parameter with submit

document.querySelector('form').addEventListener('submit',function (e){ //e stands for event, an element in each e, e prevents default
  e.preventDefault()
  //e.preventDefaults prevents all the events from reload
  let drugName = document.querySelector('input').value
  console.log(drugName)
  fetch(`https://api.fda.gov/drug/ndc.json?count=brand_name`)
  .then(res => res.json())
  .then(response => {
    console.log(response);
    document.querySelector('#result1').textContent = response.results[0].term;
    document.querySelector('#result2').textContent = response.meta.disclaimer;
  })
  // .catch(err =>{
  //   console.log(`error ${err}`)
  //   alert("Sorry, there are no results for your search.")
  // })
})

// function getMedReaction(e){ //e stands for event, an element in each e, e prevents default
//   e.preventDefault()
//   //e.preventDefaults prevents all the events from reload
//   let drugName = document.querySelector('input').value
//   console.log(drugName)
//   feth(`https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:"fatigue"&limit=1`)
//   .then(res => res.json())
//   .then(response => {
//     console.log(response);
//     document.querySelector('p').textContent = response.meta.disclaimer;
//   })
  // .catch(err =>{
  //   console.log(`error ${err}`)
  //   alert("Sorry, there are no results for your search.")
  // })
// }

// NOTES after Nick
// function getFDALocation(userInput){
//   feth(`https://api.fda.gov/drug/event.json?18M39HhK9MPfUt0Xkc3uZdKmx2xztZyi3JKbyyyZ&search=${userInput}`) //template literal
//   .then(res => res.json())
//   .then(response => {
//     console.log(response);
//   })
//  response.filter //use filter method for this part**
//   .catch(err =>{
//     console.log(`error ${err}`)
//     alert("Sorry, there are no results for your search.")
//   })
// }
