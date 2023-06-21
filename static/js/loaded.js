function loadedcontent(){
    let wrapper = document.getElementById("wrapper")
    let table = "<div class=\"accordion accordion-flush\" id=\"accordionFlushExample\">"
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)

        if(key.startsWith('http')){


            table += `

<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" onclick="sendLink(\`${key}\`)" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse\`${key}\`" aria-expanded="false" aria-controls="flush-collapse\`${key}\`">
        ${key}
      </button>
    </h2>
    <div id="flush-collapse\`${key}\`" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><div class="row"><iframe class="col-lg-12 col-md-12 col-sm-12" src="about:blank" id="${key}" title="Iframe Example" height="800px"></iframe></div></div>
    </div>

        `
            table += "</div>"
            wrapper.innerHTML = table

            console.log(`${key}: ${localStorage.getItem(key)}`)
        }

    }
}