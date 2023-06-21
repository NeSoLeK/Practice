



function sendLink(link){

    if(!localStorage.getItem(link)){
        console.log("НЕТ В ПАМЯТИ!")

            let request = new XMLHttpRequest();
            let search = JSON.stringify({link: link})
            request.open("POST", "/download", true)
            request.setRequestHeader("Content-Type", "application/json");
            request.addEventListener("load", function (){
                let recievedData = request.response
                recievedData = JSON.parse(recievedData)


                localStorage.setItem(link, recievedData);
                let doc = document.getElementById(link).contentWindow.document;
                doc.open();
                doc.write(recievedData);
                doc.close();

            })
            request.send(search)
        }


    else {
        let doc = document.getElementById(link).contentWindow.document;
        doc.open();
        doc.write(localStorage.getItem(link));
        doc.close();
    }
}

// onclick="sendLink(\`${element}\`)"