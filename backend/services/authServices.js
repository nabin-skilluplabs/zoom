import { PrismaClient } from '@prisma/client';
import random from 'random';
import date from 'date-and-time';


const prisma = new PrismaClient();

export async function createSignUpVerification(email) {
    const code = String(random.int(1000000, 9999999));
    const now = new Date();
    const expiryAt = date.addMinutes(now, 10);
    return await prisma.signUpVerification.create({
        data: {
            email,
            code,
            expiryAt
        }
    });
}

export async function findSignUpVerificationByEmail(email) {
    return await prisma.signUpVerification.findFirst({ where: { email } });
}

export async function createNewCodeForExisting(id) {
    const code = String(random.int(1000000, 9999999));
    const now = new Date();
    const expiryAt = date.addMinutes(now, 10);
    return await prisma.signUpVerification.update({ 
        where: { 
            id 
        }, 
        data: {
            code,
            expiryAt
        } 
    });
}

export async function verifyOtp(data) {
    return await prisma.signUpVerification.findFirstOrThrow({
        where: {
            email: data.email,
            code: data.code,
            expiryAt: {
                gte: new Date()
            }
        }
    });
}