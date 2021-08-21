import '../App.css'

function Foot() {
  return (
    <footer className="footer p-0">
      <div className="spacer waves">
        

        <div className="divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className='columns has-text-centered mega-margin is-vcentered'>
          <div className='column is-2'>
            <h1 className='title has-text-white is-3'> Grupo 5 </h1>
            <a href="https://bulma.io">
              <img
                src="https://bulma.io/images/made-with-bulma--white.png"
                alt="Made with Bulma"
                width="128"
                height="24" />
            </a>
          </div>

          <div className='column' >
            <h1 className='title has-text-white is-4'> Matías Briones </h1>
            <h1 className='subtitle has-text-white is-6'> mgbriones@uc.cl </h1>
          </div>

          <div className='column'>
            <h1 className='title has-text-white is-4'> Francisco Fuentes </h1>
            <h1 className='subtitle has-text-white is-6'> francisco.fuentes@uc.cl </h1>
          </div>

          <div className='column'>
            <h1 className='title has-text-white is-4'> Matías Jacobsen </h1>
            <h1 className='subtitle has-text-white is-6'> matias.j@uc.cl</h1>
          </div>

          <div className='column'>
            <h1 className='title has-text-white is-4'> José Vilchez </h1>
            <h1 className='subtitle has-text-white is-6'> jgvilchez@uc.cl</h1>
          </div>
          <div className='column is-1'>
            <a href="https://github.com/Francisco5674/webjam" className="icon has-text-white">
              <i className="fab fa-2x fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Foot;