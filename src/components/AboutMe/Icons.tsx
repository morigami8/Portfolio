import { Icon } from './interfaces';

type IconProps = {
  icons: Icon[];
};
const Icons = ({ icons }: IconProps) => {
  return (
    <section className="icons-container">
      {icons.map((icon) => {
        return (
          <div className="justify-center">
            <div className="icon-box" key={icon.name}>
              <span className="icon-label">{icon.label}</span>
              <div className="icon-tooltip">
                <p>{icon.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Icons;
