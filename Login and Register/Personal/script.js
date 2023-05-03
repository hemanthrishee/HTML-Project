document.querySelector("#files").addEventListener("change", e => 
{
    if(window.File && window.Blob && window.FileReader && window.FileList)
    {
        const files = e.target.files;
        const output = document.querySelector("#result");

        for (let i = 0;i < files.length;i++)
        {
            if(!files[i].type.match("image"))
            {
                continue;
            }
            const picreader = new FileReader();
            picreader.addEventListener("load", function(event) 
            {
                const picfile = event.target;
                const div = document.createElement("div");
                div.innerHTML = `<img class="thumbnail" src="${picfile.result}" title="${picfile.name}"/>`;
                output.appendChild(div);
            })
            picreader.readAsDataURL(files[i]);
        }
    }
    else
    {
        alert("Your browser does not support the file API")
    }
})