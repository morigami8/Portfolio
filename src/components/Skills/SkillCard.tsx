import { Card } from './interfaces';

import React from 'react';

const SkillCard = ({ logo, label, description }: Card) => {
  return (
    <div className={`skill-card ${label}`}>
      <div className="skill-logo skill-item">{logo}</div>
      <div className="skill-label skill-item">{label}</div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
