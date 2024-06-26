import MyResume from '../../resume.pdf';
import styles from './_resume.module.scss';

const Resume = () => {
  return (
    <div
      className={`${styles['resume-container']} resume-container py-6`}
      id="resume"
    >
      <h2>
        <a target="_blank" href={MyResume}>
          {' '}
          <span>Download/View</span>
        </a>{' '}
        my resume
      </h2>
    </div>
  );
};

export default Resume;
