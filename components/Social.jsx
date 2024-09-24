import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaBlogger} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/AKUZWE-Sheja/"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/edwige-akuzwe-50779a261/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/a.sheja.43/"},
    {icon: <FaBlogger />, path: "https://substack.com/@dignityinwords"}
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social