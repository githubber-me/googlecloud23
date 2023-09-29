fetch("vercel.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let vercel of products){
        out += `
        <tr>
            <td>${vercel.sn}</td>
            <td>${vercel.se}</td>
            <td>${vercel.sn}</td>
            <td><a href="${vercel.url}">${vercel.sn}'s profile</a></td> 
            <td>${vercel.cc}</td>
            <td>${vercel.bc}</td>
            <td>${vercel.gc}</td>
            <td>${vercel.bp}</td>
            <td>${vercel.rs}</td>
        </tr>
        `;

    }
    placeholder.innerHTML = out;
})
