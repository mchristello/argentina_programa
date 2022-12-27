// Elementos del DOM
let title = document.getElementById('title');
let picture = document.getElementById('picture');

let personalInfo = document.getElementById('personal_info');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let education = document.getElementById('education');
let experience = document.getElementById('experience');

let personalInfoContainer = document.getElementById('personal_info_container');
let emailContainer = document.getElementById('email_container');
let phoneContainer = document.getElementById('phone_container');
let educationContainer = document.getElementById('education_container');
let experienceContainer = document.getElementById('experience_container');

// Usuario
const user = {
    name: "Lionel",
    lastname: "Scaloni",
    email: "lionel.scaloni@campeondeamerica.com",
    birthday: "16 de Mayo de 1978",
    address: "Pujato, Provincia de Santa Fé.",
    phone: "(54) 9 11-CampeonDelMundo",
    photo: './public/Lionel-Scaloni-El-Planeta-Urbano-1-WEB-copia.webp'
}

// Eventos
title.innerHTML = `${user.name} ${user.lastname} - CV.`;
picture.innerHTML = `<img src="${user.photo}" alt="${user.lastname} profile pic">`;

personalInfo.addEventListener('click', () => {
    emailContainer.innerHTML = '';
    experienceContainer.innerHTML = '';
    educationContainer.innerHTML = '';
    phoneContainer.innerHTML = '';

    personalInfoContainer.innerHTML = `<div class="personal_info">
                                            <h2> Hola! Mi nombre es <b>${user.name} ${user.lastname}</b></h2>
                                            <p>Soy un técnico inexperto, pero espero que pueda adecuarme a tu busqueda y que logremos trabajar juntos!</p>
                                            <p>Fecha de nacimiento: ${user.birthday}</p>
                                            <p>Domicilio: ${user.address}</p>
                                        </div>`;
    
});

email.addEventListener('click', () => {
    personalInfoContainer.innerHTML ='';
    experienceContainer.innerHTML = '';
    educationContainer.innerHTML = '';
    phoneContainer.innerHTML = '';

    emailContainer.innerHTML = `<div class="email_info">
                                    <h2><u>E-Mail</u></h2>
                                    <p>Si necesitas contactarme, este es mi email: <b>${user.email}</b></p>
                                </div>`
});

phone.addEventListener('click', () => {
    personalInfoContainer.innerHTML ='';
    emailContainer.innerHTML = '';
    experienceContainer.innerHTML = '';
    educationContainer.innerHTML = '';

    phoneContainer.innerHTML = `<div class="phone_info">
                                    <h2><u>Teléfono</u></h2>
                                    <p>Si queres contactarme más rapido, este es mi número: ${user.phone}</p>
                                </div>`;
});

education.addEventListener('click', () => {
    personalInfoContainer.innerHTML ='';
    emailContainer.innerHTML = '';
    experienceContainer.innerHTML = '';
    phoneContainer.innerHTML = '';

    educationContainer.innerHTML = `<div class="education_info">
                                        <h2><u>Educación</u></h2>
                                        <ul>
                                            <li>Torneo L' Alcudia Sub-20 - 2018 - Campeón🥇</li>
                                            <li>Copa Mundial de la FIFA 2006 - Cuartos de Final</li>
                                            <li>Preolímpico Sub-23 2000 - Tercer Lugar</li>
                                            <li>Copa Mundial Sub-20 1997 - Campeón🥇</li>
                                        </ul>
                                    </div>`;
});

experience.addEventListener('click', () => {
    personalInfoContainer.innerHTML ='';
    emailContainer.innerHTML = '';
    educationContainer.innerHTML = '';
    phoneContainer.innerHTML = '';

    experienceContainer.innerHTML = `<div class="experience_info">
                                        <h2><u>Experiencia Laboral</u></h2>
                                        <ul>
                                            <li>Copa Mundial de la FIFA - Qatar 2022 - CAMPEON.🥇</li>
                                            <li>Copa de Campeones CONMEBOL-UEFA - Campeón🥇</li>
                                            <li>Copa América 2021 - Campeón🥇</li>
                                            <li>Copa América 2019 - Tercer Lugar</li>
                                        </ul>
                                    </div>`;
});