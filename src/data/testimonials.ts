export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    id: "ana",
    name: "Ana",
    text: "Variedade boa e preço que cabe no bolso. Saio com o pedido rápido.",
    rating: 5,
  },
  {
    id: "bruno",
    name: "Bruno",
    text: "Sempre acho a cerveja gelada. Atendimento direto, sem enrolação.",
    rating: 5,
  },
  {
    id: "carla",
    name: "Carla",
    text: "Horário até 22h salva quando o churrasco aperta.",
    rating: 4,
  },
  {
    id: "diego",
    name: "Diego",
    text: "Retirei na loja no mesmo dia. Fácil de achar o que eu queria.",
    rating: 5,
  },
  {
    id: "elena",
    name: "Elena",
    text: "Preço honesto e prateleira cheia. Volto sempre.",
    rating: 5,
  },
];
