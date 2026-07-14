export interface Testimonial {
  name: string
  company: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'María Fernanda López',
    company: 'Restaurante El Sazón',
    text: 'CREA2 transformó por completo la imagen de nuestro restaurante. Desde el diseño del logotipo hasta la rotulación de fachada, todo quedó espectacular. Nuestros clientes no dejan de comentar lo profesional que se ve el local.',
  },
  {
    name: 'Carlos Mendoza',
    company: 'Mueblería Moderna',
    text: 'Necesitábamos viniles decorativos para toda nuestra sala de exhibición y el resultado superó nuestras expectativas. La atención fue increíble y los tiempos de entrega fueron exactamente los acordados. Altamente recomendados.',
  },
  {
    name: 'Ana Patricia Ruiz',
    company: 'Clínica DentalCare',
    text: 'Desde la primera llamada sentimos la profesionalidad de CREA2. Diseñaron toda la imagen de nuestra clínica, desde el logotipo hasta la rotulación de cada consultorio. Quedamos encantados con el resultado.',
  },
]
