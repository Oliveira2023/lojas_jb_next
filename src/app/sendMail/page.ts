import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // problema req.body vem como undefined **
    console.log('req.body');
    console.log(req.method);
    
    if (req.method === 'POST') {
        console.log('dentro do if');
        
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        let transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Seu email
                pass: process.env.EMAIL_PASS  // Sua senha
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'luciano.oliveira9603@gmail.com',
            subject: 'subject',
            text: 'envio da aplicação nextjs'
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email enviado com sucesso' });
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            res.status(500).json({ error: 'Erro ao enviar email' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}