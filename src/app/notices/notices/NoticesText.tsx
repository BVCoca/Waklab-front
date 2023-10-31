import "./notices.css";
import Discord from "@/app/icons/commonIcon/discord.svg"
import Email from "@/app/icons/commonIcon/email.svg"

export default function NoticesText() {
  return (
    <div id="notices">
      <h2>Ce site a été développé par :</h2>
      <p>
        <p className="devName">Cocacolack </p>
        <p className="devDiscord"><Discord className="discordLogo" width={25} height={25}/> cocacolack</p>
        <br />
        <br />
        <p className="devName">XiXi </p>
        <p className="devDiscord"><Discord className="discordLogo" width={25} height={25}/> xixi49</p>
        <br />
        <br />
        <p className="devName">Judge </p>
        <p className="devDiscord"><Discord className="discordLogo" width={25} height={25}/> judgeobito</p>
        <br />
        <br />
        <a href="mailto:waklab.contact@gmail.com" className="devEmail"><Email className="emailLogo" width={25} height={25}/>waklab.contact@gmail.com</a>
      </p>
    </div>
  );
}
