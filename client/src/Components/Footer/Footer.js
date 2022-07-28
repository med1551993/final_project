import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
    <div className="new_footer_top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="f_widget company_widget wow fadeInLeft"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInLeft"
              }}
            >
              <h3 className="f-title f_600 t_color f_size_18">Contact</h3>
              <p>Ne ratez aucune mise à jour de nos nouveaux modèles et extensions. !</p>
              <form
                action="#"
                className="f_subscribe_two mailchimp"
                method="post"
                noValidate="true"
                _lpchecked={1}
              >
                <input
                  type="text"
                  name="EMAIL"
                  className="form-control memail"
                  placeholder="Email"
                />
                <button className="btn btn_get btn_get_two" type="submit">
                
                S'abonner
                </button>
               
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInLeft"
              }}
            >
              <h3 className="f-title f_600 t_color f_size_18">Téléchargement</h3>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="#">Android App</a>
                </li>
                <li>
                  <a href="#">ios App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInLeft"
              }}
            >
              <h3 className="f-title f_600 t_color f_size_18">Aide</h3>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Termes &amp; conditions</a>
                </li> 
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="f_widget social-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.8s"
              style={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "fadeInLeft"
              }}
            >
              <h3 className="f-title f_600 t_color f_size_18">Nos pages</h3>
              <div className="f_social_icon">
                <a href="#" className="fab fa-facebook" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bg">
        <div className="footer_bg_one" />
        <div className="footer_bg_two" />
      </div>
    </div>
    <div className="footer_bottom">
            <p className="mb-0 f_400 copyright">
              © COVOITURINI 2022 Tous droits réservés.
            </p>
   
    </div>
  </footer>
  
  )
}

export default Footer