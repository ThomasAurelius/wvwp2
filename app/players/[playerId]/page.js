import { getPlayerById } from "@/lib/prisma/players"
import PlayerDetail from './PlayerDetail'

const page = async ({ params }) => {
   
  return (
    <>
    <PlayerDetail />
    <p></p>
    </>
  )
}

export default page