import { Icon } from './interfaces';

type IconProps = {
  icons: Icon[];
};
const Icons = ({ icons }: IconProps) => {
  return (
    <section className="icons-container">
      {icons.map((icon) => {
        return (
          <div className="icon-box">
            <span className="icon-label">{icon.label}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Icons;
