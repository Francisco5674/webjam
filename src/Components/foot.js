import '../App.css'

function Foot(){
    return(
        <footer class="footer Dark">
        <div class="content has-text-centered">
          <div className = 'columns'>
              <div className= 'column'>
                  <h1 className='title has-text-white is-3'> Team 5 </h1>
              </div>

              <div className= 'column' >
                  <h1  className='title has-text-white is-4'> Francisco Fuentes </h1>
                  <h1 className='title has-text-white is-4'> francisco.fuentes@uc.cl </h1>
              </div>

              <div className= 'column'>
                  <h1 className='title has-text-white is-4'> Matías Briones </h1>
                  <h1 className='title has-text-white is-4'> mgbriones@uc.cl </h1>
              </div>

              <div className= 'column'>
                  <h1 className='title has-text-white is-4'> José Vilchez </h1>
                  <h1 className='title has-text-white is-4'> jgvilchez@uc.cl</h1>
              </div>

              <div className= 'column'>
                  <h1 className='title has-text-white is-4'> Matías Jacobsen </h1>
                  <h1 className='title has-text-white is-4'> matias.j@uc.cl</h1>
              </div>

              <div className= 'column'>
                
                <br/>
                <br/>
                <a href="https://bulma.io">
                <img
                    src="https://bulma.io/images/made-with-bulma.png"
                    alt="Made with Bulma"
                    width="128"
                    height="24"/>
                </a>
              </div>



          </div>
        </div>
        </footer>
    )
}

export default Foot;