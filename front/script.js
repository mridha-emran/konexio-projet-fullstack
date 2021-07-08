


 $(() => {
	
    	$(".btnShowCountries").click();
    });

    $(document).ready(function () {
        $.ajax(
            {
                url:"http://localhost:8000/all",
        
                success: function (data, status, response) {
                    console.log(data);
                  let countries=""
                    // for(var i=0;i< data.length;i++){
                        data.data.forEach(country=> {
                            
                            // countries+=`<li>${data[i].name}</li>`
                            countries+=`<li>${country.name}</li>`
                        });
                        
                    
                    $('#list').html(countries)
                }
            }
        );
        
    })
    $("button").click(function () {


        $.ajax(
    
            {
                url:"http://localhost:8000/${userValue}",
                success: function (data) {
    
                    const userValue = $("#userSearchValue").val();
                    console.log(data);
                    
                }
            });
    
    });










// $(() => {
	
// 	getAllCountries();
// 	$("btnShowData").click(handleClick);
// });
// async function getAllCountries() {
// 	const res = await fetch("http://localhost:8000/all");
// 	// On transforme la réponse en objet JSON utilisable dans notre code JS
// 	const jsonRes = await res.json();
// 	console.log(jsonRes);

// 	updateList(jsonRes.data);
// }