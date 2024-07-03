import { PrismaClient } from '@prisma/client';
import random from 'random';
import date from 'date-and-time';


const prisma = new PrismaClient();

export async function createSignUpVerification(email) {
    const code = String(random.int(1000000, 9999999));
    const now = new Date();
    const expiryAt = date.addMinutes(now, 10);
    await prisma.signUpVerification.create({
        data: {
            email,
            code,
            expiryAt
        }
    });
    // send email with code sendgrid
}