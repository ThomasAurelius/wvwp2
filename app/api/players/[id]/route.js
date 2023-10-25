import { NextResponse } from "next/server"
import { main } from "../route"
import prisma from "@/prisma"

export const GET = async (req, res ) => {
   try {
      const id = req.url?.split("/players/")[1];
      await main();
      const player = await prisma.player.findFirst({ where: { id: id } });
      
      if (!player) {
         return NextResponse.json({message: "Player not found"}, {status: 404});
      }
      return NextResponse.json({message: "Success", player}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}

export const PUT = async (req, res) => {
   try {
      const id = req.url?.split("/players/")[1];
      const { user, userId, usaWPnum, name, gender, age, dob, year, email, phone, street, city, state, zip, referrer, isMaster, duesPaid, tournPaid, agreeCoC} = await req.json();
      await main();
      const player = await prisma.player.update({data: { 
         user, userId, usaWPnum, name, gender, age, dob, year, email, phone, street, city, state, zip, referrer, isMaster, duesPaid, tournPaid, agreeCoC
      }, where: {id}});
      if (!player) {
         return NextResponse.json({message: "Player not found"}, {status: 404});
      }
       return NextResponse.json({message: "Update Successful", player}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}

export const DELETE = async (req, res) => {
   try {
      const id = req.url?.split("/players/")[1];
      await main();
      const player = await prisma.player.delete({where: {id}});
      if (!player) {
         return NextResponse.json({message: "Player not found"}, {status: 404});
      }
       return NextResponse.json({message: "Delete Successful", player}, {status: 200});
   } catch (error) {
      return NextResponse.json({message: "Error: " + error}, {status: 500});
   } finally {
      await prisma.$disconnect()
   }
}
