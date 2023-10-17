import { getPlayerById } from "@/lib/prisma/players"
import PlayerDetail from './PlayerDetail'

const page = async ({ params }) => {
   const { player } = await getPlayerById(params.userId)
  return (
    <>
    <PlayerDetail player={player} />
    <p></p>
    </>
  )
}

export default page