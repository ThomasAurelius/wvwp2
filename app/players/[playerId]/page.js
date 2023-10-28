
import { getPlayerById } from "@/lib/prisma/players"



const page = async ({params}) => {
      
    const player = await getPlayerById(params.playerId);
    console.log(player)
    const dateOfBirth = new Date(player.player.dob).getMonth() + 1 + '/' + new Date(player.player.dob).getDate()  + '/' + new Date(player.player.dob).getFullYear();
    let birthYear = new Date(player.player.dob).getFullYear();
    let birthMonth = new Date(player.player.dob).getMonth()+1;
    let birthDate =  new Date(player.player.dob).getDate();
    birthDate = birthDate +1
    // let birthYear = dateOfBirth.slice(11,15); 
    // let birthMonth = dateOfBirth.slice(4,7);
    // let birthDay = dateOfBirth.slice(8,10);
    
    
    let correctedDob = new Date(dateOfBirth).toString
    const lastUpdated = new Date(player.player.updatedAt).getMonth() + 1 + '/' + new Date(player.player.updatedAt).getDate()  + '/' + new Date(player.player.updatedAt).getFullYear()
    
    
   return (
    <>
      <section className='px-4 py-4'>
         <div className="h-40 rounded-full">
            <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Player Details</h1> 
            <p className="text-2xl font-bold"> {player.player.name}</p> 
            <p className="text-md text-stone-800">USA Water Polo #: {player.usaWPnum}</p>
            <p className="text-md text-stone-800">Email: {player.player.email}</p>
            <p className="text-md text-stone-800">Phone: {player.player.phone}</p>
            <p className="text-md text-stone-800">Address: {player.player.street}</p>
            <p className="text-md text-stone-800">{player.player.city}, {player.player.state} {player.player.zip}</p>
            <div className='form-group form-check'>
              <label htmlFor="dob" className="form-date-label">Date of Birth</label>
              <p className="text-md text-red-800"> {dateOfBirth} </p>
            
            </div>
            <p className="text-md text-stone-800">Age: {player.player.age}</p>
            <p className="text-md text-stone-800">Year: {player.player.year}</p>
            <p className="text-md text-stone-800">Referred By: {player.player.referrer}</p>
            <div className='form-group form-check'>
            <input name="isMaster" type="checkbox" className="form-check-input" id="isMaster" checked={player.player.isMaster} />
            <label htmlFor="isMaster" className="form-check-label">Is Master</label>
            </div>
            <div className='form-group form-check'>
            <input name="duesPaid" type="checkbox" className="form-check-input" id="duesPaid" checked={player.player.duesPaid} />
            <label htmlFor="duesPaid" className="form-check-label">Dues Paid</label>
            </div>
            <div className='form-group form-check'>
            <input name="tournPaid" type="checkbox" className="form-check-input" id="tournPaid" checked={player.player.tournPaid} />
            <label htmlFor="tournPaid" className="form-check-label">Tournaments Paid</label>
            </div>
            <div className='form-group form-check'>
            <input name="agreeCoC" type="checkbox" className="form-check-input" id="agreeCoC" checked={player.player.agreeCoC} />
            <label htmlFor="agreeCoC" className="form-check-label">Agreed to Code Of Conduct</label>
            </div>
            
            
              <p className="text-sm text-red-800 font-bold">Last Updated: {lastUpdated}</p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
         </div>
            <button className="my-80 bg-blue-300 border-black">Edit Player</button>
      </section>
      
      </>
  )
}

export default page