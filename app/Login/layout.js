import Login from './page'

const LoginLayout = async ({ children }) => {
   return (
      <section className='flex'>
         <aside className='w-1/4'>
            
         </aside>
         <main>{children}</main>
      
      </section>
   )
}

export default LoginLayout