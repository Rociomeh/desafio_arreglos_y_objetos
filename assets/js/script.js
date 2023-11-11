const venta = [
    {
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        nombre: "Apartamento de lujo en zona exclusiva",
        descripción: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicación: "123 Luxury Lane, Prestige Suburb, CA 45678", 
        habitaciones: 4, 
        costo: 5500, 
        smoke: false,
        pets: false
    },

    {
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        nombre: "Apartamento acogedor en la montaña",
        descripción: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicación: "789 Mountain Road, Summit Peaks, CA 23456", 
        habitaciones: 2-1, 
        costo: 1200, 
        smoke: true,
        pets: true
    },

    {
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        nombre: "Penthouse de lujo con terraza panorámica",
        descripción: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicación: "567 Skyline Avenue, Skyview City, CA 56789", 
        habitaciones: 3, 
        costo: 4500, 
        smoke: false,
        pets: true
    }
]

//ESTE VA EN LA PAGINA DE VENTA.HTML

const d = document.querySelector(".venta") //define la clase 'venta; que está en el html
for(let propiedad of venta) {
    let html = ` 
         <div class="col-md-4 mb-4"> 
           <div class="card" id="card">
             <img
                 src="${propiedad.src}" 
                 class="card-img-top"
                 alt="Imagen del departamento"
             />
             <div class="card-body">
                 <h5 class="card-title">
                 ${propiedad.nombre}
                 </h5>
                 <p class="card-text">
                     ${propiedad.descripción}
                 </p>
                 <p>
                 <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicación}
                 </p>
                 <p>
                 <i class="fas fa-bed">${propiedad.habitaciones}</i> Habitaciones |
                 <i class="fas fa-bath">${propiedad.habitaciones}</i> Baños
                 </p>
                 <p><i class="fas fa-dollar-sign">${propiedad.costo}</i></p>     
         `;
     if(propiedad.smoke == true){
         html += `
         <p class="text-success">
                 <i class="fas fa-smoking"></i> Se permite fumar
                 </p>       
         `;
     }else if(propiedad.smoke == false){
         html += `
         <p class="text-danger">
                 <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>       
         `;
     };
     if(propiedad.pets == true){
         html += ` 
                  <p class="text-success">
                 <i class="fas fa-paw"></i> Se permiten mascotas
                 </p> 
             </div> 
         </div> `;
     }else if(propiedad.pets == false){
         html += ` 
                  <p class="text-danger">
                 <i class="fas fa-ban"></i> No se permiten mascotas
                 </p> 
             </div> 
         </div> `;
     };
     d.innerHTML += html;
}  