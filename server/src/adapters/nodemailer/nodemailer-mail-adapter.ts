import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2d528d6c073fff",
        pass: "e1d1d1073c3cfa"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Igor Nunes <igornj@hotmail.com>',
            subject: subject,
            html: body,
        });
    };
}