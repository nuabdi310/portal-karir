import Logo from "../assets/sefas-logo-plain.png";

function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <img src={Logo} alt="Logo" height={30} className="mb-4" />
        <p className="text-justify">
          We believe that diverse perspectives drive innovation and meaningful
          impact. We are proud to be an equal opportunity employer, committed to
          building an inclusive workplace where all individuals regardless of
          race, gender, age, religion, disability, sexual orientation, or
          background are valued and empowered. We welcome applicants from all
          walks of life and are dedicated to fair, respectful, and merit-based
          hiring practices.
        </p>
        <p className="text-justify">
          At SEFAS, the entire recruitment process is free of charge. We do not
          ask for any fees at any stage whether for applications, interviews, or
          job offers. Please be cautious of job listings on third-party
          platforms. All legitimate job opportunities are listed exclusively on
          our official careers website, and any application will be redirected
          there. If in doubt, always verify through our official site or contact
          us directly.
        </p>
        <div class="footer-divider"></div>
        <div className="py-3">
          copyright &copy; 2026 Portal Karir. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
