import { getAllPlayers } from "@/lib/prisma/players";
import Link from "next/link";

const Players = async () => {   
   const { players } = await getAllPlayers();
   return (
      <section className="fixed h-full w-1/4 bg-stone-800">
         <div className="center py-4">
            <h1 className="mb-3 text-2xl font-semibold tracking-tight text-white">Players</h1>

            <ul className="flex flex-col test-sm text-white">
               {players?.map((player) => (
                  <li key={player.id}>
                     <Link href={`/players/${player.id}`}>
                        {player.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}

export default Players;