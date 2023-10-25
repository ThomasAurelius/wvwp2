import prisma from '../../prisma/index.ts'

export async function getAllPlayers() {
   try {
      const players = await prisma.player.findMany()
      
      return { players }
   } catch (error) {
         return { error }
   }
}


export async function getPlayerById(id) {
   try {
      const player = await prisma.player.findUnique({
         where: { id: id },
      })
      console.log(player)
      return { player }
   } catch (error) {
         return { error }
   }
}

export async function createPlayer(data) {
   try {
      const player = await prisma.player.create({
         data: {
            ...data,
         },
      })
      return { player }
   } catch (error) {
         return { error }
   }
}

export async function updatePlayer(id, data) {
   try {
      const player = await prisma.player.update({
         where: { id: Number(id) },
         data: {
            ...data,
         },
      })
      return { player }
   } catch (error) {
         return { error }
   }
}

export async function deletePlayer(id) {
   try {
      const player = await prisma.player.delete({
         where: { id: Number(id) },
      })
      return { player }
   } catch (error) {
         return { error }
   }
}
