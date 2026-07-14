export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto tiempo toma una cotización?',
    answer: 'Por lo general, respondemos cotizaciones en un plazo de 24 a 48 horas hábiles.',
  },
  {
    question: '¿Realizan instalaciones?',
    answer: 'Sí, contamos con un equipo especializado en instalación de rótulos, vinilos y lonas',
  },
  {
    question: '¿Cuáles son los tiempos de entrega?',
    answer: 'Dependiendo del proyecto, los tiempos van de 3 a 10 días hábiles. Proyectos especiales pueden requerir más tiempo.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos transferencias, depósitos bancarios, tarjetas de crédito/débito y efectivo.',
  },
  {
    question: '¿Tienen cobertura nacional?',
    answer: 'Sí, realizamos envíos a todo el país El Salvador, por le momento solo tenemos instalaciones en Morazán.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'Todos nuestros trabajos cuentan con garantía. Si tienes algún problema, lo resolvemos sin costo adicional.',
  },
]
