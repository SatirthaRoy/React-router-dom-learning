
import './App.css'
import { Link, Outlet, NavLink, useNavigation, useLocation } from 'react-router-dom'

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>React router</h1>
      <ul className='flex gap-4 *:cursor-pointer'>
        <NavLink to='/users'><li>Users</li></NavLink>
        <NavLink to='/photos'><li>Photos</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <div>
        {
          navigation.state === 'loading' ? <h1>LOADING....</h1> : <Outlet/>
        }
        
      </div>
    </>
  )
}

export default App
