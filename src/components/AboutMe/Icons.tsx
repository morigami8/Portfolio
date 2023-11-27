import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { Fa500Px } from 'react-icons/fa';

interface Icon {
  name: string;
  label: ReactElement<IconType, IconType>;
}

const Icons = () => {
  const aboutMeIcons: Icon[] = [{ name: 'VB', label: <Fa500Px /> }];
  return (
    <div>
      {aboutMeIcons.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
