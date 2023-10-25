
import { getPlayerById } from "@/lib/prisma/players"


const page = async ({params}) => {
  
    
    const player = await getPlayerById(params.userId);
    
   return (
      <section className='px-4 py-4'>
         <div className="relative h-40 rounded-full">
            <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Player Details{params.userId}</h1>
            <p className="text-xl font-bold">{player.name}</p>
            <p className="text-sm text-stone-800">USA Water Polo #:{player.usaWPnum}</p>
            <p className="text-sm text-stone-800">Email: {player.email}</p>
            <p className="text-sm text-stone-800">Phone: {player.phone}</p>
            <p className="text-sm text-stone-800">Address: {player.street}</p>
            <p className="text-sm text-stone-800">{player.city}, {player.state} {player.zip}</p>
            <p className="text-sm text-stone-800">Date of Birth: {player.dob}</p>
            <p className="text-sm text-stone-800">Age: {player.age}</p>
            <p className="text-sm text-stone-800">Year: {player.year}</p>
            <p className="text-sm text-stone-800">Referred By: {player.referrer}</p>
            <p className="text-sm text-stone-800">Is Master?{player.isMaster}</p>
            <p className="text-sm text-stone-800">Dues Paid?{player.duesPaid}</p>
            <p className="text-sm text-stone-800">Tournaments Paid?{player.tournPaid}</p>
            <p className="text-sm text-stone-800">Agreed to Code Of Conduct{player.agreeCoC}</p>
            <p className="text-sm text-stone-800">Last Updated:{player.updatedAt}</p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
         </div>
      </section>
  )
}

export default page