function getAllKeys(){

    let request = new XMLHttpRequest();
    request.open("GET", "/getkeys", true)
    request.addEventListener("load", function () {
        let recievedKeys = JSON.parse(request.response)
        let wrapper = document.getElementById("wrapper")
        let table = `
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Ключ</th>
                        <th scope="col">Ссылка</th>
                    </tr>
                </thead>
                <tbody>
`

        for(let key in recievedKeys) {
            for (let key1 in recievedKeys[key]) {
                table += `

                    <tr>
                          <td>${key}</td>
                          <td>${recievedKeys[key][key1]}</td>
                    </tr>
                
                `
                console.log(recievedKeys[key][key1])
            }
        }


        table += `
            </tbody>
        </table>  
`
        wrapper.innerHTML += table

    })

    request.send()
}