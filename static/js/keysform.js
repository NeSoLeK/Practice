
document.getElementById("submit").addEventListener("click", function (e){
    e.preventDefault();

    let keysForm = document.forms["keysForm"];
    let key = keysForm.elements["key"].value;

    let search = JSON.stringify({key: key.toLowerCase()})
    let request = new XMLHttpRequest();
    request.open("POST", "/search", true)
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function (){
        let recievedKey = JSON.parse(request.response)

        let wrapper = document.getElementById("wrapper")
        let table = "<div class=\"accordion accordion-flush\" id=\"accordionFlushExample\">"
        recievedKey.forEach(element => table += `

<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"onclick="sendLink(\`${element}\`)" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse\`${element}\`" aria-expanded="false" aria-controls="flush-collapse\`${element}\`">
        ${element}
      </button>
    </h2>
    <div id="flush-collapse\`${element}\`" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><div class="row"><iframe class="col-lg-12 col-md-12 col-sm-12" src="about:blank" id="${element}" title="Iframe Example" height="800px"></iframe></div></div>
    </div>
  </div>
    
        `)
    table += "</div>"

        wrapper.innerHTML = table
    })
    request.send(search)
})





// document.getElementById("submit").addEventListener("click", function (e){
//     e.preventDefault();
//
//     let keysForm = document.forms["keysForm"];
//     let key = keysForm.elements["key"].value;
//
//     let search = JSON.stringify({key: key.toLowerCase()})
//     let request = new XMLHttpRequest();
//     request.open("POST", "/search", true)
//     request.setRequestHeader("Content-Type", "application/json");
//     request.addEventListener("load", function (){
//         let recievedKey = JSON.parse(request.response)
//         console.log(recievedKey)
//         let wrapper = document.getElementById("wrapper")
//         let table = `<table class="table table-bordered text-center">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">${key}</th>
//                                 </tr>
//                             </thead>
//                          <tbody>`
//         recievedKey.forEach(element => table += `
//                 <tr>
//                     <td><a class="link" href="/download?link=${element}">${element}</a></td>
//                 </tr>`)
//         table += "</tbody>\n" +
//             "        </table>"
//
//         wrapper.innerHTML = table
//     })
//     request.send(search)
// })