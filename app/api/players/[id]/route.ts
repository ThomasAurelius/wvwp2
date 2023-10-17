import { NextResponse } from "next/server"
import { main } from "../route"
import prisma from "@/prisma"

export const GET = async (req:Request, res:NextResponse) => {
   try {
      const id = req.url?.split("/players/")[1];
      await main();
      const post = await prisma.player.findFirst({ where: { id } });
      
      if (!post) {
         return NextResponse.json({message: "Player not found"}, {status: 404});
      }
      return NextResponse.json({message: "Success", post}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}

export const PUT = async (req:Request, res:NextResponse) => {
   try {
      const id = req.url?.split("/players/")[1];
      const { user, userId, usaWPnum, name, gender, age, dob, year, email, phone, street, city, state, zip, referrer, isMaster, duesPaid, tournPaid, agreeCoC} = await req.json();
      await main();
      const post = await prisma.player.update({data: { 
         user, userId, usaWPnum, name, gender, age, dob, year, email, phone, street, city, state, zip, referrer, isMaster, duesPaid, tournPaid, agreeCoC
      }, where: {id}});
      if (!post) {
         return NextResponse.json({message: "Player not found"}, {status: 404});
      }
       return NextResponse.json({message: "Update Successful", post}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}

export const DELETE = async (req:Request, res:NextResponse) => {
   try {
      const id = req.url?.split("/players/")[1];
      await main();
      const post = await prisma.player.delete({where: {id}});
      if (!post) {
         return NextResponse.json({message: "Player not found"}, {status: 404});
      }
       return NextResponse.json({message: "Delete Successful", post}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}
