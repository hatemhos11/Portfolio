import { useRef, useState } from "react";
import SocialLinks from "../common/SocialLinks";

const Contact = () => {
    const [msg, setMsg] = useState('')
    const formMSG = useRef<HTMLDivElement | null>(null)


    let timeRemoveMsg:any = null
    function sendMsg(e:Event){
        e.preventDefault()
        setMsg('Sent Successfully')
        formMSG.current?.classList.add('msg-success')
        timeRemoveMsg = setTimeout(() => {
            formMSG.current?.classList.remove('msg-success')
            setMsg('')
        }, 5000);
    }

    return (
        <section id="contact" className="contact odd">
            <div className="container">
                {/* -------- Head -------- */}
                <div className="contact_head mb-4">
                    <h2 className="contact__title title">Contact<span className="colored">Me</span></h2>
                </div>
                {/* -------- Social links -------- */}
                <div className="contact__links mb-6">
                    <SocialLinks />
                </div>
                {/* -------- Form -------- */}
                <form className="contact__form" onSubmit={(e)=>sendMsg}>
                    <input type="text" className="contact__input" placeholder="Name" />
                    <input type="Email" className="contact__input" placeholder="Email" />
                    <textarea className="contact__input"  rows={10} placeholder="Your Message" />
                    <div ref={formMSG} className="msg">{msg}</div>
                    <button className="button contact__button ">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
