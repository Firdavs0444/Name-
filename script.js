const submitBtn = document.getElementById('submitBtn')
const nameInput = document.getElementById('nameInput')
const resultsList = document.getElementById('resultsList')
const resultsSection = document.getElementById('resultsSection')

submitBtn.onclick = async() => {
    const ism = nameInput.value;

    if (ism === "") {
        alert("Ism kiriting!");
        return;
    }

    const javob = await fetch("https://api.nationalize.io/?name=" + ism);
    const mapi = await javob.json();

    resultsList.innerHTML = "";

    if (mapi.country.length > 0) {
        resultsSection.style.display = "block";

        for (let i = 0; i < mapi.country.length; i++) {
            let davlat = mapi.country[i];
            let foiz = (davlat.probability * 100).toFixed(1);
            let kod = davlat.country_id;


            resultsList.innerHTML += `
                <li>
                    ${i + 1}. 
                    <img src="https://flagsapi.com/${kod}/shiny/64.png" width="30">
                    ${kod} ${foiz}%
                </li>
            `;
        }
    } else {
        alert("Topilmadi!");
    }
};