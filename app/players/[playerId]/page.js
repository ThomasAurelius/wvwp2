
import { getPlayerById } from "@/lib/prisma/players"



const page = async ({params}) => {
      
    const player = await getPlayerById(params.playerId);
    console.log(player)
    const dateOfBirth = new Date(player.player.dob).getMonth() + 1 + '/' + new Date(player.player.dob).getDate()  + '/' + new Date(player.player.dob).getFullYear();
    let birthYear = new Date(player.player.dob).getFullYear();
    let birthMonth = new Date(player.player.dob).getMonth()+1;
    let birthDate =  new Date(player.player.dob).getDate();
    birthDate = birthDate +1

    
    
    let correctedDob = new Date(dateOfBirth).toString
    const lastUpdated = new Date(player.player.updatedAt).getMonth() + 1 + '/' + new Date(player.player.updatedAt).getDate()  + '/' + new Date(player.player.updatedAt).getFullYear()
    
    
   return (
    <>
      <section className='px-4 py-4'>
         <div className="h-40 rounded-full">
          <form>
            <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Player Details</h1> 
            <div>
              <label htmlFor="name">Player Name: </label>
              <input name="name" type="text" className="form-control" id="name" value={player.player.name} />
            </div>
            <div>
              <label htmlFor="usaWPnum">USA Water Polo #: </label>
              <input type="text" name="usaWPnum" id="useWPnum" value={player.player.usaWPnum} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="text" name="email" id="email" value={player.player.email} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="text" name="phone" id="phone" value={player.player.phone} />
            </div>
            <div>
              <label htmlFor="street">Address: </label>
              <input type="text" name="street" id="street" value={player.player.street} />
            </div>
            <div>
              <label htmlFor="city">City: </label>
              <input type="text" name="city" id="city" value={player.player.city} />
            </div>
            <div>
              <label htmlFor="state">State: </label>
              <input type="text" name="state" id="state" value={player.player.state} />
            </div>  
            <div>
              <label htmlFor="zip">Zip: </label>
              <input type="text" name="zip" id="zip" value={player.player.zip} />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth: </label>
              <input type="date" name="dob" id="dob" value={player.player.dob} />
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <input type="text" name="age" id="age" value={player.player.age} />
            </div>
            <div>
              <label htmlFor="year">Year: </label>
              <input type="text" name="year" id="year" value={player.player.year} />
            </div>
            <div>
              <label htmlFor="referrer">Referred By: </label>
              <input type="text" name="referrer" id="referrer" value={player.player.referrer} />
            </div>
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

            <div className='form-group form-check'>
              <input name="agreePhoto" type="checkbox" className="form-check-input" id="agreePhoto" checked={player.player.agreePhoto} />
              <label htmlFor="agreePhoto" className="form-check-label">Agreed to Photo Release</label>
            </div>


            
              <p className="text-sm text-red-800 font-bold">Last Updated: {lastUpdated}</p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
          
            <button className="my-2 bg-blue-300 border-black">Edit Player</button> <br></br>
            <button className="my-2 bg-blue-300 border-black">Delete Player</button>
            </form>
         </div>
      </section>
      
      </>
  )
}

export default page