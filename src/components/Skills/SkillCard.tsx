import { useRef, useState } from 'react';
import { Card } from './interfaces';

interface SkillCards {
  skills: Card[];
}
const SkillCard = ({ skills }: SkillCards) => {
  const [isHovering, setIsHovering] = useState(false);
  const [maxHeight, setMaxHeight] = useState('250px');

  const contentRef: any = useRef(null);

  const handleMoustEnter = () => {
    if (contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
      console.log('contentRef: ', contentRef.current.scrollHeight);
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMaxHeight('250px');
    setIsHovering(false);
  };

  return (
    <div className="skill-card-container">
      {skills.map((skill, index) => {
        return (
          <div
            className="skill-card"
            key={index}
            onMouseEnter={handleMoustEnter}
            onMouseLeave={handleMouseLeave}
            style={{ maxHeight: maxHeight }}
            ref={contentRef}
          >
            <div className="skill-logo skill-item">{skill.logo}</div>
            <div className="skill-label skill-item">{skill.label}</div>
            <div className="skill-desc skill-item">
              <p>
                {skill.description.length > 85 && !isHovering
                  ? skill.description.substring(0, 84) + '...'
                  : skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
