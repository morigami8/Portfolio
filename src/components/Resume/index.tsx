import MyResume from '../../../public/resume.pdf';

const Resume = () => {
  return (
    <div>
      <h2>
        Please <a href={MyResume}> download</a> my resume.
      </h2>
    </div>
  );
};

export default Resume;
