import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function senVerificationCode(data) {
    const msg = {
        to: data.email,
        from: 'info@skilluplabs.com.au', // Change to your verified sender
        subject: `${data.code} is your Zoom verification code`,
        template_id: "d-6ff7456297c742deaec5ddd1b0008ef3",
        dynamic_template_data: data
      }
    await sgMail.send(msg);
}