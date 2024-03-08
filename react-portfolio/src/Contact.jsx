import call from "./assets/call.svg";
import whatsapp from "./assets/whatsapp.svg";
export default function Contact() {
  return (
    <div className="contact">
      <div className="description">
        <p className="query">For any query</p>
        <p className="free">Please Feel free to CONTACT me</p>
      </div>
      <div>
        <div className="information">
          <p className="for-call">For Call </p>
          <button>
            <img src={call} alt="call" className="call" />
            <a href="tel:7741785330"> +44 7741785330 </a>
          </button>
        </div>
        <div>
          <p className="for-call">For Email</p>
          <button>
            <img src={whatsapp} alt="call" className="call" />
            <a href="mailto:ns6296666@gmail.com">ns6296666@gmail.com</a>
          </button>
        </div>
      </div>
    </div>
  );
}
