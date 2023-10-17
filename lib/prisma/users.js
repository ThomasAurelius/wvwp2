import prisma from   '.'

export async function getAllUsers() {
   try {
      const users = await prisma.users.findMany()
      return { users }
   } catch (error) {
         return { error }
   }
}


export async function getUserById(id) {
   try {
      const user = await prisma.users.findUnique({
         where: { id: Number(id) },
      })
      return { user }
   } catch (error) {
         return { error }
   }
}

export async function createUser(data) {
   try {
      const user = await prisma.users.create({
         data: {
            ...data,
         },
      })
      return { user }
   } catch (error) {
         return { error }
   }
}

export async function updateUser(id, data) {
   try {
      const user = await prisma.users.update({
         where: { id: Number(id) },
         data: {
            ...data,
         },
      })
      return { user }
   } catch (error) {
         return { error }
   }
}

export async function deleteUser(id) {
   try {
      const user = await prisma.users.delete({
         where: { id: Number(id) },
      })
      return { user }
   } catch (error) {
         return { error }
   }
}
