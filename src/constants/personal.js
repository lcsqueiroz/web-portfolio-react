import profilePhoto from '../assets/profile.png';

const emailTo = 'lqvieira7@gmail.com';
const emailSubject = encodeURIComponent('Contato via Portfólio');
const emailBody = encodeURIComponent(
  'Olá, Lucas!\n\nMeu nome é [seu nome] e encontrei seu portfólio.\n\nMotivo do contato:\n[Descreva aqui]\n\nAtenciosamente,\n[Seu nome]',
);

export const personal = {
  name: 'Lucas Q. Vieira',
  role: 'Desenvolvedor Frontend',
  bio: 'Sou estudante de Ciência da Computação e Estagiário em Desenvolvimento de Software, onde atuo desenvolvendo sistemas web. Atualmente, foco em desenvolvimento web utilizando React.',
  photoUrl: profilePhoto,
  githubUrl: 'https://github.com/lcsqueiroz',
  linkedinUrl: 'https://linkedin.com/in/lcsqueiroz',
  googleMail: emailTo,
  emailUrl: `https://mail.google.com/mail/?view=cm&to=${emailTo}&su=${emailSubject}&body=${emailBody}`,
};
