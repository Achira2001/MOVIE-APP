import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {

    const [searchInput,setSearchInput] = useState('')
    const navigate = useNavigate()

    const navigation = [
        {
            label : "TV Shows",
            href : "tv"
        },
        {
            label : "Movies",
            href : "movie"
        }
    ]

    useEffect(()=>{
        navigate('/search?q=${searchInput}')
    },[searchInput])

  return (
    <header className = "fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
        <div className = 'container mx-auto px-3 flex items-center h-full'>
            <div>
                <img
                    src = {logo}
                    alt = {logo}
                    width = {120}
                />
            </div>

            <nav className='hidden lg:flex items-center gap-1 ml-5'>
                {
                    navigation.map((nav,index) =>{
                        return(
                            <div>
                                
                                <NavLink key = {nav.label} to = {nav.href} className = {({isActive}) => 'px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}'}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>

            <div className='ml-auto flex items-center gap-5'>
                <form className='flex items-center gap-2'>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="bg-transparent px-4 py-1 outline-none border-none"
                        onChange={(e)=>setSearchInput(e.target.value)}
                        value={searchInput}
                    />
                    <button className="text-4xl text-white">
                    <IoSearchOutline/> 
                    </button>
                </form>
                
                <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                    <img
                        src={userIcon}
                        width="w-full h-full"
                    />
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header
