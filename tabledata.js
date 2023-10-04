fetch("vercel.json")
.then(function(response){
    return response.json();
})
.then(function(products)
    {
        let placeholder = document.querySelector("#data-output");
        let out = "";        
        for(let vercel of products)
        {
            let q;
            if(vercel.gc == 1)
            {
                q = "Completed";
            }
            else if(vercel.gc == 0)
            {
                q = "Not Completed";
            }
            else if(vercel.gc == 2)
            {
                q = " ";
            }
            else
            {
                q=" ";
            }
            out
            += `
                <tr>
                    <td><a href="${vercel.url}">${vercel.sn}'s profile</a></td>
                    <td>${vercel.se}</td>
                    <td>${vercel.edt}</td>
                    <td>${vercel.cc}</td>
                    <td>${vercel.bc}</td>
                    <td>${q}</td>
                    <td>${vercel.bp}</td>
                    <td>${vercel.rs}</td>
                </tr>
            `;

        }

        placeholder.innerHTML = out;
            function filterTable(input)
            {
                let rows = document.querySelectorAll("#data-output tr");
                rows.forEach(function(row)
                {
                    let name = row.querySelector("td:first-child").textContent.toLowerCase();            
                    if (name.includes(input))
                    {
                        row.style.display = "";
                    }
                    else
                    {
                        row.style.display = "none";
                    }
                });
            }
        
            function clearSearch()
            {
                document.getElementById("search-input").value = "";
                filterTable("");
            }
            
            document.getElementById("search-input").addEventListener("input", function()
            {
                let input = this.value.toLowerCase();
                filterTable(input);
            });
        
        document.getElementById("search-button").addEventListener("click", filterTable);
        document.getElementById("clear-button").addEventListener("click", clearSearch);
              
    }
);
