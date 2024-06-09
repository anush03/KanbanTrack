import React, { useState, useRef, useEffect } from "react";
import { FcEditImage } from "react-icons/fc";

type EditableHeadingProps = {
  initialTitle: string;
  headingColor: string;
  onSave: (newTitle: string) => void;
};

export const EditableHeading: React.FC<EditableHeadingProps> = ({
  initialTitle,
  headingColor,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onSave(title);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      onSave(title);
    }
  };

  return (
    <div className="flex justify-center">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{ color: headingColor }}
        />
      ) : (
        <div onClick={handleTitleClick} className="flex place-items-baseline">
          <h1 style={{ color: headingColor }}>{title}</h1>
          <FcEditImage />
        </div>
      )}
    </div>
  );
};
