import { useEffect, useRef, useState } from 'react';
import { Card } from './interfaces';

const SkillCard = ({ logo, label, description }: Card) => {
  const [isHovering, setIsHovering] = useState(false);
  const [maxHeight, setMaxHeight] = useState('250px');

  const contentRef: React.MutableRefObject<null> = useRef(null);
  const fullHeight = useRef('250px');

  useEffect(() => {
    if (contentRef.current) {
      fullHeight.current = `${contentRef.current.scrollHeight}px`;
    }
  }, []);
  const handleMoustEnter = () => {
    setMaxHeight(`${contentRef.current.scrollHeight}px`);
    //console.log('contentRef: ', contentRef.current.scrollHeight);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMaxHeight('250px');
    setIsHovering(false);
  };

  return (
    <div
      className={`skill-card ${label}`}
      onMouseEnter={handleMoustEnter}
      onMouseLeave={handleMouseLeave}
      style={{ maxHeight: maxHeight }}
      ref={contentRef}
    >
      <div className="skill-logo skill-item">{logo}</div>
      <div className="skill-label skill-item">{label}</div>
      <div className="skill-desc skill-item">
        <p>
          {description.length > 85 && !isHovering
            ? description.substring(0, 84) + '...'
            : description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
