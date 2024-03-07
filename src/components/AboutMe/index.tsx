import styles from '../AboutMe/_about-me.module.scss';
import Icons from './Icons';
import { howItStartedIcons } from './howItStarted.icons';
import { howItsGoingIcons } from './howItsGoing.icons';

const AboutMe = () => {
  return (
    <section className={`${styles['about-me-container']} about-me-container`}>
      {/* <div className="about-me-title">
        <h2>The Story So Far</h2>
      </div> */}
      <div className="about-me-content">
        <div className="how-it-started">
          <h2>How it Started</h2>
          <p className="py-5">
            I studied Computer Science at Cal State Fullerton. Their curriculum
            stack was in C++, my first and last interaction with that language.
            In 2014, my first job was in Southern California at Flavorus (now
            See Tickets), a ticketing company specializing in concerts and
            festivals. Their stack was Visual Basic, XSLT and T-SQL.
          </p>
          <Icons icons={howItStartedIcons} />
        </div>
        <div className="divisor">
          <span></span>
        </div>

        <div className="how-it-going">
          <h2>How it's Going</h2>
          <p>
            In 2015, I took a position at Meyer Corporation as a Web Systems
            Admin, similar to what a DevOps position would be now. Eventually, I
            got promoted and became a Frontend Programmer, creating internal
            tools in React and Redux. Over the last two years, I have worked in
            C# making cloud applications (Microsoft Azure). In my personal time,
            I am developing and learning Go/Golang to leverage its powerful
            concurrency features.
          </p>
          <Icons icons={howItsGoingIcons} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
