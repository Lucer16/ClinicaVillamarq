/**
 * Script Principal - Clínica Veterinaria Villamarq
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Menú Móvil ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars-staggered');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Cerrar menú al hacer clic en un enlace de navegación
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars-staggered');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // --- Cerrar modal al hacer clic fuera del contenido ---
    const modalOverlay = document.getElementById('serviceModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});

// --- Datos de Servicios (Base de Datos Local) ---
const servicesData = {
    consultas: {
        title: "Consultas <span class='text-verde-marca'>Especializadas</span>",
        desc: "Medicina preventiva y diagnósticos precisos para una vida larga.",
        list: ["Chequeo General", "Vacunación", "Certificados", "Nutrición"],
        img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1000"
    },
    farmacia: {
        title: "Farmacia <span class='text-verde-marca'>Especializada</span>",
        desc: "Stock completo de medicamentos de alta calidad.",
        list: ["Antibióticos", "Antiparasitarios", "Suplementos", "Tratamientos"],
        img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000"
    },
    laboratorio: {
        title: "Laboratorio <span class='text-verde-marca'>Digital</span>",
        desc: "Resultados en minutos con tecnología de vanguardia.",
        list: ["Rayos X Digital", "Hemogramas", "Pruebas Virales", "Ecografías"],
        img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000"
    },
    hospital: {
        title: "Hospitalización <span class='text-verde-marca'>24/7</span>",
        desc: "Monitoreo constante en áreas seguras.",
        list: ["Cuidado Intensivo", "Fluido-terapia", "Signos Vitales", "Post-Quirúrgica"],
        img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1000"
    },
    grooming: {
        title: "Grooming <span class='text-verde-marca'>& Spa</span>",
        desc: "Higiene y estética profesional para perros y gatos.",
        list: ["Cortes de Raza", "Baños Medicados", "Uñas y Oídos", "Glándulas"],
        img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000"
    },
    petshop: {
        title: "Pet <span class='text-verde-marca'>Shop Premium</span>",
        desc: "Los mejores alimentos y accesorios para tu mascota.",
        list: ["Alimento Súper Premium", "Juguetes", "Paseo", "Camas"],
        img: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=1000"
    }
};

/**
 * Abre el modal y renderiza dinámicamente el contenido
 * @param {string} serviceKey - La clave del servicio en servicesData
 */
function openModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;
    
    const body = document.getElementById('modalBody');
    const modal = document.getElementById('serviceModal');
    
    if (body && modal) {
        body.innerHTML = `
            <div class="modal-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
                <div class="relative">
                    <img src="${data.img}" class="modal-img rounded-[2rem] h-64 md:h-80 w-full object-cover shadow-xl">
                    <div class="absolute -bottom-2 -right-2 bg-verde-marca text-white p-3 rounded-xl shadow-lg">
                        <i class="fa-solid fa-shield-dog text-xl"></i>
                    </div>
                </div>
                <div>
                    <h2 class="modal-title text-3xl md:text-4xl font-black mb-4 text-gray-900 leading-tight">${data.title}</h2>
                    <p class="text-gray-500 text-base md:text-lg mb-6 leading-relaxed">${data.desc}</p>
                    <div class="grid grid-cols-1 gap-2 mb-8">
                        ${data.list.map(item => `
                            <div class="flex items-center gap-3">
                                <div class="w-5 h-5 bg-verde-marca/10 rounded-full flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-check text-verde-marca text-[10px]"></i>
                                </div>
                                <span class="text-gray-700 text-sm font-medium">${item}</span>
                            </div>
                        `).join('')}
                    </div>
                    <a href="https://wa.me/50763222286" target="_blank" class="block text-center bg-gray-900 text-white py-4 rounded-full font-bold text-lg hover:bg-black active:scale-95 transition-all shadow-lg">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Solicitar Cita
                    </a>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra el modal de servicios
 */
function closeModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}