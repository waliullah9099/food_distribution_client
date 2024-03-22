export type TVolunteer = {
  _id: string;
  name: string;
  email: string;
  phone: number;
  location?: string;
};

export type TTestimonial = {
  _id: string;
  title: string;
  description: string;
  image: string;
};
export type TComment = {
  _id: string;
  title: string;
  image: string;
};
