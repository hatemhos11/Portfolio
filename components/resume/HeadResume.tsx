import Link from "next/link";

const HeadResume = () => {
    return (
        <>
        <div className="head">
                <div>
                    <h2 className="head__name">Hatem Elsharkawy</h2>
                    <h6 className="head__jobtitle mb-2">MERN Stack Developer</h6>
                    <p className="head__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel repudiandae minus libero quibusdam ratione autem doloremque, fuga, voluptates nulla dolorem nemo tempora molestiae unde fugit, et officia numquam corporis!</p>
                </div>
                <div className="head__contact">
                    <div>Email: <span>Hatemhosni00@gmail.com</span></div> 
                    <div>Phone: <span>+201093358553</span></div> 
                    <div>Birth: <span>20 April, 2000</span></div>
                    <div>Address: <span>Cairo, Egypt</span></div>
                    <div>Github: <span><Link href="https://github.com/hatemhos11" className="head__contact--link">Link</Link></span></div>
                </div>
        </div>
        <div className="head__links mb-3 mt-3">
            <Link className="head__links__link" href='https://github.com/hatemhos11'>Github</Link>
            <Link className="head__links__link" href='https://www.linkedin.com/in/hatem-elsharkawy-150283212'>Linkedin</Link>
            <Link className="head__links__link" href=''>LeetCode</Link>
            <Link className="head__links__link" href='Hatem_Elsharkawy_CV.pdf' download>Download Resume</Link>
        </div>
        </>
        
    );
};

export default HeadResume;
