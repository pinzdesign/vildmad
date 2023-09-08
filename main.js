const { createClient } = supabase
const _supabase = createClient('https://kswscmjoqonxyqabktgv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzd3NjbWpvcW9ueHlxYWJrdGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjM1OTEsImV4cCI6MjAwOTM5OTU5MX0.ILlRzBX-qHqmGfVcm73fU_PbsmGFQur9pOkETXzSAHE')

//console.log('Supabase Instance: ', _supabase)


// pulls data from full table
async function getProduct(id = null) {
    if(id != null) {
        const { data, error } = await _supabase
            .from('vildmad_full')
            .select()
            .eq('id', id); 
        console.log(data);
    }
    else {
        const { data, error } = await _supabase
            .from('vildmad_full')
            .select();
        console.log(data);
        let i = 0;
        data.forEach(function() {
            const temp = document.querySelector("#items").content;
            const copy = temp.cloneNode(true);
            copy.querySelector("h5").textContent = data[i].title;
            copy.querySelector(".category_0").textContent = data[i]["categories/0/name"];
            copy.querySelector(".category_1").textContent = data[i]["categories/1/name"];
            copy.querySelector("img").setAttribute("src", data[i]["profile_image/src"]);
            document.querySelector("body").appendChild(copy);
            i++;
        })
    }
}


// pulls data from light table
async function getTitle(id) {
    const { data, error } = await _supabase
        .from('vildmad')
        .select('title')
        .eq('id', id);

    console.log(data[0].title);
    const para = document.querySelector("#para");
    para.innerHTML = data[0].title;
}

getProduct();