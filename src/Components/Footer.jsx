export default function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-slate-500">
      <div>© {new Date().getFullYear()} Gagan N</div>
      <div className="mt-2">
        Built with React & Tailwind
      </div>
      <div className="justify-center flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <a href="./resume.pdf" target="_blank">
          <img src={resumeicon} className='w-5 h-5' alt="resume" />
          <span className="sr-only">Resume</span>

        </a>
        {/*                         <a href="https://twitter.com/SauravKaku">
                        <img src={twitterxicon}  className='w-5 h-5' alt="twitterxicon"/>
                            <span className="sr-only">TwitterX</span>
                            
                        </a> */}
        <a href="mailto:sumit.saurav0602@gmail.com">
          <img src={emailicon} className='w-5 h-5' alt="email" />

          <span className="sr-only">gmail</span>
        </a>
        <a href="https://github.com/Sumit021995/">
          <img src={githubicon} className='w-5 h-5' alt="githubicon" />

          <span className="sr-only">github</span>
        </a>
        <a href="https://www.linkedin.com/in/sumit-saurav-3388b5112">
          <img src={linkedinicon} className='w-5 h-5' alt="linkedinicon" />

          <span className="sr-only">LinkedIn</span>
        </a>
        {/*                        <a href="https://www.facebook.com/scsauravkaku">
                        <img src={facebookicon} className='w-5 h-5' alt="facebookicon"/>
                        
                            <span className="sr-only">facebook</span>
                        </a> */}
      </div>
    </footer>
  );
}
