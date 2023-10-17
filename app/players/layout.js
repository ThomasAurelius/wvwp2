import Players from './Players'

const PlayersLayout = async ({ children }) => {
   return (
      <section className='flex'>
         <aside className='w-1/4'>
            <Players />
         </aside>
         <main>{children}</main>
      
      </section>
   )
}

export default PlayersLayout