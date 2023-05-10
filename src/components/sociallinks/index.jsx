import Telegram from "../../images/contacticons/Telegram";
import Circle from "../../images/contacticons/circle";
import Facebook from "../../images/contacticons/facebook";
import Instagram from "../../images/contacticons/instagram";
import Youtube from "../../images/contacticons/Youtube";
import "./main.scss";
const SocialLinks = () => {
  return (
    <div className="flex gap-5 pt-[95px] social-links">
      <a
        href="https://www.youtube.com/"
        className="link-a relative w-[40px] h-[40px]"
      >
        <span className="circle-hover">
          <Circle />
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Youtube />
        </span>
      </a>
      <a
        href="https://www.telegram.com/"
        className="relative w-[40px] h-[40px]"
      >
        <span className="circle-hover">
          <Circle />
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Telegram />
        </span>
      </a>

      <a
        href="https://www.facebook.com/"
        className="relative w-[40px] h-[40px]"
      >
        <span className="circle-hover">
          <Circle />
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Facebook />
        </span>
      </a>

      <a
        href="https://www.instagram.com/"
        className="relative w-[40px] h-[40px]"
      >
        <span className="circle-hover">
          <Circle />
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Instagram />
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
