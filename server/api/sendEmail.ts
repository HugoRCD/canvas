import { Resend } from "resend";
import { H3Event } from "h3";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    const { email, subject, message, phone, fullname } = body;
    return await resend.emails.send({
      from: "HR Folio <contact@helpr.tech>",
      to: ["hrichard206@gmail.com"],
      subject: "Nouveau message depuis HR Folio",
      html: `Message de ${fullname} (${email}), ${phone}, Subject: ${subject}, Message: ${message}`,
    });
  } catch (error) {
    return { error };
  }
});
