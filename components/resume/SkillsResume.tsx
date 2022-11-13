import {BsCheckLg} from 'react-icons/bs'

const SkillsResume = () => {
    return (
        <div className="skillsResume">
            <h3 className="resume--title">Skills</h3>
            <div className="skillsResume__skills">
                <ResumeSkill skillName="Redux & RTK & React-Query & React-Router-Dom"/>
                <ResumeSkill skillName="Next.js"/>
                <ResumeSkill skillName="Problem Solving"/>
                <ResumeSkill skillName="SASS"/>
                <ResumeSkill skillName="Tailwind"/>
                <ResumeSkill skillName="Material UI (MUI)"/>
                <ResumeSkill skillName="HTML"/>
                <ResumeSkill skillName="CSS"/>
                <ResumeSkill skillName="Javascript"/>
                <ResumeSkill skillName="OOP"/>
            </div>
        </div>
    );
};

export default SkillsResume;


const ResumeSkill = ({skillName}:{skillName:string})=>{
    return (
        <div className="skillsResume__skills__skill">
            <BsCheckLg color='green'/>
            {skillName}
        </div>
    )

}
