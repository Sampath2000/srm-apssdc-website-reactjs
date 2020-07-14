fetch('data.json').then(response=>{
		return response.json();
	}).then(data=>{
		console.log(data);
		//console.log(data.profile.bascis);
       profile(data.profile.bascis);
       details(data.profile.details);
	})
	var child_one=document.querySelector(".child_one");
	var child_two=document.querySelector(".child_two");
    
    var profile=(basic_info)=>{
	// console.log(basic_info.name);
	var name=document.createElement("h2");
	name.textContent = basic_info.name;
	child_one.append(name);

	var profession=document.createElement("h4");
	profession.textContent=basic_info.profession;
	profession.classList.add("profession");
	child_one.append(profession);

	var hr=document.createElement("hr");
	child_one.append(hr);

	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.textContent=basic_info.email;
	email.classList.add("link");
	child_one.append(email);

	var br=document.createElement("br");
	child_one.append(br);
	
	
    var phone=document.createElement("a");
	phone.href="tel:"+basic_info.phone;
	phone.textContent=basic_info.phone;
	phone.classList.add("link");
	child_one.append(phone);

	var adress=document.createElement("p");
	adress.textContent=basic_info.adress;
	child_one.append(adress);
 }
   var details=(details_info)=>{
   //console.log(details_info);
   var summaryheading=document.createElement("h2");
   summaryheading.textContent="Summary";
   var hr1=document.createElement("hr");
   child_two.append(summaryheading);
   child_two.append(hr1)
}