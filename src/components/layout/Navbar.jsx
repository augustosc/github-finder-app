import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    /**  navbar ; container,
     *   mb-12 : margin-bottom 48px ou 3rem,
     *   shadow-lg: outer shadow large,
     *   bg-neutral: background-color
     *   text-neutral: color
    */
    <nav className=
    'navbar mb-12 shadow-lg bg-neutral text-neutral-content'>

        {/* container,
            mx-auto: centralizarah os elementos */}
      <div className="container mx-auto">

        {/* flex:none: cancela a class flex do parent
            px-2: horizontal padding 0.5rem
            mx-2: horizontal margin 0.5rem
        */}
        <div className="flex-none px-2 mx-2">

            {/* inline:  will cause the text inside the element to wrap normally 
                text-3xl: text size 
            */}
            <FaGithub className='inline pr-2 text-3xl'/>

            {/* text-lg: text size
                font-bold,
                align-middle: alinha texto o verticalmente no centro
                 */}
            <Link to='/' className='text-lg font-bold align-middle'>
                {title}
            </Link>
        </div>

        {/* flex-1: to allow a flex item to grow and shrink as needed
         */}
        <div className="flex-1 px-2 mx-2">

            {/* flex,
                justify-end: justify-content:flex-end, posiciona itens nas bordas */}
            <div className="flex justify-end">
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                    Home
                </Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                    About
                </Link>
            </div>

        </div>
      </div>
      
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar
