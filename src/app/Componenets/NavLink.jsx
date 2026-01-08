
import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-0 text-white text-sm rounded md:p-0 hover:text-[#c38d90]">
        
            {title}
            </Link>
                
    );
};



export default NavLink;