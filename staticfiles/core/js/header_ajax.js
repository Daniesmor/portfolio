// Variable para mantener un registro de si las redes sociales ya han sido agregadas
let redesSocialesAgregadas = false;
let contactoAgregado = false;
let certAgregado = false;


function obtenerDatosYActualizar() {
    fetch('/api/auth/users/')  // Usamos la URL de la vista 'UserView' en la app 'users'
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para mostrar los datos en la página
            mostrarDatosEnPagina(data[0]);
        })
        .catch(error => console.error('Error al obtener los datos:', error));

       
    fetch('/api/certificates/daniel/')  // Usamos la URL de la vista 'UserView' en la app 'users'
        .then(response => response.json())
        .then(certificates => {
            // Llamar a la función para mostrar los datos en la página
            mostrarCertificados(certificates);
            
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

function mostrarCertificados(data) {
    const certificateElemento = document.getElementById('certificate');



    if (!certAgregado) {
        for (const item of data) {
            console.log(item)
            agregarCertificate(item)
        }
        certAgregado = true
    } 
    
    
    function agregarCertificate(data) {
        nombreCert = data.name;
        companyCert = data.company;
        expeditionCert = data.expedition;
        idCert = data.certification_id;
        linkCert = data.certificate_link;
        photoCert = data.photo;

        // Crear el elemento <div> con clase "item"
        const divItem = document.createElement("div");
        divItem.classList.add("item");

        // Crear el elemento <div> con clase "row"
        const divRow = document.createElement("div");
        divRow.classList.add("row");

        // Crear el elemento <div> con clase "col-3"
        const divCol3 = document.createElement("div");
        divCol3.classList.add("col-3");

        // Crear la imagen
        const img = document.createElement("img");
        img.src = "https://pbs.twimg.com/profile_images/1415324297304977411/p9kTpGac_400x400.png";
        img.alt = "...";
        img.classList.add("img-thumbnail");

        // Añadir la imagen al <div class="col-3">
        divCol3.appendChild(img);

        // Crear el elemento <div> con clase "col"
        const divCol = document.createElement("div");
        divCol.classList.add("col");

        // Crear los elementos <h3> con clase "title certtitle" y <h4> con clases "certificate certinfo" y "certificate-id text-truncate certid"
        const h3 = document.createElement("h3");
        h3.classList.add("title", "certtitle");
        h3.textContent = data.name;

        const h4Udemy = document.createElement("h4");
        h4Udemy.classList.add("certificate", "certinfo");
        h4Udemy.textContent = `${data.company} - ${expeditionCert}`;

        const cert_url = document.createElement("a");
        cert_url.href = data.certificate_link;
        const h4CertID = document.createElement("h4");
        h4CertID.classList.add("certificate-id", "text-truncate", "certid");
        h4CertID.textContent = data.certfication_id;
        cert_url.appendChild(h4CertID);

        // Añadir los elementos <h3> y <h4> al <div class="col">

        divCol.appendChild(h3);
        divCol.appendChild(h4Udemy);
        divCol.appendChild(cert_url);

        // Añadir los <div class="col-3"> y <div class="col"> al <div class="row">
        divRow.appendChild(divCol3);
        divRow.appendChild(divCol);

        // Añadir el <div class="row"> al <div class="item">
        divItem.appendChild(divRow);

        // Retornar el elemento <div class="item">

        certificateElemento.appendChild(divItem)
    }
}

// Función para mostrar los datos en el HTML según los campos recibidos del JSON
function mostrarDatosEnPagina(data) {
    const avatarElemento = document.getElementById('avatar');
    const nombreElemento = document.getElementById('nombre');
    const redesSocialesElemento = document.getElementById('redes-sociales');
    const basicInfoElemento = document.getElementById('basics-information');
    const studiesUniversidadElemento = document.getElementById('edu');
    const aboutElemento = document.getElementById('about');


    // Mostrar el nombre completo en el elemento h1
    aboutElemento.textContent = data.about_me;

    // Construir la URL completa de la imagen utilizando la ubicación actual como base
    const avatarURL = new URL(data.avatar, window.location.origin);

    // Mostrar la imagen utilizando la URL completa
    
    avatarElemento.src = avatarURL.href;

    // Mostrar el nombre completo en el elemento h1
    nombreElemento.textContent = data.complete_name;

    // Mostrar los estudios y la universidad en el elemento h2
    studiesUniversidadElemento.textContent = `${data.studies} - ${data.university}`;


    // Redes sociales
    if (!redesSocialesAgregadas) {
        if (data.twitter_link) {
            agregarRedSocial("Twitter", data.twitter_link, "fa-twitter");
        }

        if (data.instagram_link) {
            agregarRedSocial("Instagram", data.instagram_link, "fa-instagram");
        }

        if (data.github_link) {
            agregarRedSocial("GitHub", data.github_link, "fa-github");
        }

        if (data.linkedin_link) {
            agregarRedSocial("LinkedIn", data.linkedin_link, "fa-linkedin");
        }

        // Marcar que las redes sociales ya han sido agregadas
        redesSocialesAgregadas = true;
        
    } else {
        if (data.twitter_link) {
            modificarRedSocial("Twitter", data.twitter_link, "fa-twitter");
        }

        if (data.instagram_link) {
            modificarRedSocial("Instagram", data.instagram_link, "fa-instagram");
        }

        if (data.github_link) {
            modificarRedSocial("GitHub", data.github_link, "fa-github");
        }

        if (data.linkedin_link) {
            modificarRedSocial("LinkedIn", data.linkedin_link, "fa-linkedin");;
        }
    }

    

    

    // Función para agregar una red social al elemento <ul> con clase "social"
    function agregarRedSocial(nombre, enlace, icono) {
        const li = document.createElement('li');
        li.classList.add('list-inline-item');
        const a = document.createElement('a');
        a.href = enlace;
        a.target = "_blank";
        a.id = nombre
        const i = document.createElement('i');
        i.classList.add("fab");
        i.classList.add(icono);
        a.appendChild(i);
        li.appendChild(a);
        redesSocialesElemento.appendChild(li);
    }
    function modificarRedSocial(nombre, enlace, icono) {
        a = document.getElementById(nombre)
        a.href = enlace

    }

    if (!contactoAgregado) {
        if (data.email_contact) {
            agregarInfo("email", data.email_contact, "fa-envelope");
        }
        if (data.telf_contact) {
            agregarInfo("telf", data.telf_contact, "fa-phone");
        }
        if (data.location_contact) {
            agregarInfo("location", data.location_contact, "fa-location-dot");
        }

        function agregarInfo(nombre, valor, icono) {
            const i = document.createElement('i');
            const li = document.createElement('li');

        
            i.classList.add('fas');
            i.classList.add(icono);
            i.setAttribute('class', 'fas fa-location-dot');
        
            li.append(i);
            li.textContent += valor;
            basicInfoElemento.appendChild(li);
            
        }
                
        contactoAgregado = true;
    }

}






// Realizar la primera petición y actualizar cada 5 segundos
obtenerDatosYActualizar();
setInterval(obtenerDatosYActualizar, 1000); // Actualizar cada 5 segundos (5000 milisegundos)
    
    //<script src="static/core/js/ajax.js"></script>