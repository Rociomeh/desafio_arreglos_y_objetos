const colores = {
    permitido: "green",
    prohibido: "red",
};

const venta = [
    {
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        nombre: "Apartamento de lujo en zona exclusiva",
        descripción: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicación: "123 Luxury Lane, Prestige Suburb, CA 45678", 
        habitaciones: 4, 
        costo: 5500, 
        smoke: false,
        pets: false,
        getStatusMessage: function () {
            if (this.smoke && this.pets) {
                return "Se permite fumar y tener mascotas.";
            } else if (this.smoke) {
                return "Se permite fumar, pero no tener mascotas.";
            } else if (this.pets) {
                return "Se permite tener mascotas, pero no fumar.";
            } else {
                return "No se permite fumar ni tener mascotas.";
            }
        },
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

const d = document.querySelector(".articulo") //definir una clase como card en el html dentro de un section  que tenga class = "card"
html = "" //inicia una variable vacia del html
for(let propiedad of venta) {
    console.log(propiedad);
        d.innerHTML += ` <article>
                        <h4> ${propiedad.nombre} </h6>
                        <img src= "${propiedad.src}" >
                        <h6> ${propiedad.descripción} </h6>
                        <h6> ${propiedad.habitaciones} </h6>
                        <h6> ${propiedad.costo} </h6>
                        <h6> ${propiedad.smoke} </h6>
                        <h6> ${propiedad.pets} </h6>
                        </article>`;
    
}
hmtl = d;

/*let html = "";
    const productos = [
      {
        id: 43,
        descripcion: " prueba",
        control: true,
        src:"https://doa.gov.lk/wp-content/uploads/2019/12/300-3001828_address-icon-png.png"
      },
      {
        id: 44,
        descripcion: " prueba",
        control: false,
      },
    ];

    for (let producto of productos) {
      let imagenTemporal = "";
      if (producto.control) {
        imagenTemporal = `  <img src="${producto.src}" style="width:100px">`;
      } else {
        imagenTemporal = "";
      }
      html += `<div class="item">
        ${imagenTemporal}
    <p>${producto.descripcion}</p>
    </div>
    `;
    }

    document.getElementById("productos").innerHTML = html;
    
    const producto = {
id: 43,
titulo: "Cafetera magnética",
precio: 23990,
color: "rojo",
src: "...", // ingresa aquí la URL de la imagen, descripción: `Calienta tu café matutino
con la nueva tecnología magnética`
};
    */