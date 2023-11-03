import { Resend } from "resend";
import { H3Event } from "h3";
import { ContactEmail } from "~/types/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail;
    const { email, subject, message, phone, fullname, budget } = body;
    return await resend.emails.send({
      from: "HR Folio <contact@helpr.tech>",
      to: ["contact@hrcd.fr"],
      subject: "Nouveau message de HR Folio",
      html: `
      <p>Un nouveau message a été envoyé depuis le formulaire de contact de HR Folio.</p>
      <p>Voici les détails du message :</p>
      <ul>
        <li>Nom : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Téléphone : ${phone}</li>
        <li>Sujet : ${subject}</li>
        <li>Budget : ${budget}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    });
  } catch (error) {
    return { error };
  }
});
