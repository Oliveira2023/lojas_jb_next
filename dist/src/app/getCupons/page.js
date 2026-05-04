export default async function cupons(req, res) {
    console.log('chamou a função getCupons');
    console.log(process.env.EMAIL_PASS);
    return res.status(200).json({ message: 'Cupons disponíveis' });
}
