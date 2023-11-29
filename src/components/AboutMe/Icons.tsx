import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { Fa500Px } from 'react-icons/fa';

interface Icon {
  name: string;
  label: ReactElement<IconType, IconType>;
}

const Icons = () => {
  const aboutMeIcons: Icon[] = [
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
    { name: 'VB', label: <Fa500Px /> },
  ];
  return (
    <section className="icons-container">
      {aboutMeIcons.map((item) => {
        return (
          <div className="icon-box">
            <h3>{item.name}</h3>
            <span className="icon-label">{item.label}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Icons;
