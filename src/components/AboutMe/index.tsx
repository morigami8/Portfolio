import styles from '../AboutMe/_about-me.module.scss';
import Icons from './Icons';

const AboutMe = () => {
  return (
    <section className={`${styles['about-me-container']} about-me-container`}>
      {/* <div className="about-me-title">
        <h2>The Story So Far</h2>
      </div> */}
      <div className="about-me-content">
        <div className="how-it-started">
          <h3>How it started</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem
            nulla pharetra diam sit amet. Lacinia at quis risus sed vulputate
            odio ut enim. Elit sed vulputate mi sit amet. Ut placerat orci nulla
            pellentesque. Dis parturient montes nascetur ridiculus mus mauris
            vitae ultricies leo. Sagittis orci a scelerisque purus semper. Sit
            amet tellus cras adipiscing enim eu turpis. Eget nunc lobortis
            mattis aliquam faucibus. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor. Porttitor massa id neque aliquam vestibulum
            morbi. Facilisis sed odio morbi quis commodo odio. Pretium aenean
            pharetra magna ac placerat vestibulum lectus. Mi tempus imperdiet
            nulla malesuada pellentesque.
          </p>
          <Icons />
        </div>
        <div className="divisor">
          <span></span>
        </div>

        <div className="how-it-going">
          <h3>How it's Going</h3>
          <p>
            Accumsan lacus vel facilisis volutpat est velit egestas. At volutpat
            diam ut venenatis tellus. Tellus molestie nunc non blandit massa
            enim nec. Porttitor rhoncus dolor purus non enim praesent elementum
            facilisis leo. Morbi blandit cursus risus at ultrices mi tempus
            imperdiet nulla. Ut placerat orci nulla pellentesque dignissim enim.
            Nulla aliquet enim tortor at auctor. Sem nulla pharetra diam sit
            amet. Ut consequat semper viverra nam libero justo. Eget egestas
            purus viverra accumsan in nisl nisi scelerisque eu. Amet massa vitae
            tortor condimentum lacinia. Tempor orci eu lobortis elementum.
            Mauris ultrices eros in cursus turpis. Ornare quam viverra orci
            sagittis eu volutpat. Volutpat lacus laoreet non curabitur gravida.
            Facilisis gravida neque convallis a cras semper auctor. Dictum sit
            amet justo donec.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
