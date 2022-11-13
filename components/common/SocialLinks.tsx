import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
    return (
        <>
            <a className="sixshape-link" title="Linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hatem-elsharkawy-150283212" >
                <FaLinkedinIn title="Linkedin" size={22} />
            </a>
            <a className="sixshape-link" title="Github" target="_blank" rel="noreferrer" href="https://github.com/hatemhos11" >
                <FaGithub title="Github" size={22} />
            </a>
            <a className="sixshape-link" title="Leetcode" target="_blank" rel="noreferrer" href="" >
                <SiLeetcode title="Leetcode" size={21} />
            </a>
        </>
);
};

export default SocialLinks;
