import styles from './_profile.module.scss';
const Profile = () => {
  return (
    <div className={`${styles['portfolio-image']} portfolio-image`} id="start">
      <div className="box">
        <div className="content">
          <img src="https://res.cloudinary.com/dl8likjsr/image/upload/v1692677135/66B3E9E9-B888-43B9-91E0-C6BA740565D7_gagsku.jpg" />
          <h2>
            Morgan Atwood
            <br />
            <span>Full Stack Developer</span>
          </h2>
          <a href="mailto:atwood.morganj@gmail.com">Hire</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
