import React from 'react'
import Button from './Button'

const buttonNames = [
  "All",
  "Music",
  "Lo-fi",
  "Mixes",
  "T-series",
  "Computer programming",
  "Podcast",
  "News",
  "Comedy",
  "Recently uploaded",
  "New to you",
  "Thrillers"
];

const ButtonList = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="flex">
        {buttonNames.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
