import prisma from '@/prisma'

import { NextResponse } from 'next/server'

export async function main() {
   try {
       await prisma.$connect()
   } catch (error) {
      return Error;
   }
  
}

export const GET = async (req: Request, res: NextResponse) => {
   try {
      await main();
      const players = await prisma.player.findMany();
      return NextResponse.json({message: "Success", players}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}


export const POST = async (req: Request, res: NextResponse) => {
   try {
      const { user, userId, usaWPnum, name, gender, age, dob, year, email, phone, street, city, state, zip, referrer, isMaster, duesPaid, tournPaid, agreeCoC} = await req.json();
      await main();

      const player = await prisma.player.create({
         data: {
            user, userId, usaWPnum, name, gender, age, dob, year, email, phone, street, city, state, zip, referrer, isMaster, duesPaid, tournPaid, agreeCoC
      }
   });
      return NextResponse.json({message: "Success", player}, {status: 201});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
   
 }