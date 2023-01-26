import Image from "next/image";
import React from "react";

const Avatar: React.FC<{
  avatarURL: string;
  userName: string;
  size: string;
}> = ({ avatarURL, userName, size }) => {
  console.log("avatar", avatarURL);

  let imgDimensions = {
    width: 280,
    height: 280,
  };

  let avatarWidth = "";

  switch (size) {
    case "lg":
      avatarWidth = "w-96";
      break;

    case "md":
      avatarWidth = "w-64";
      break;

    case "sm":
      avatarWidth = "w-32";
      break;

    default:
      avatarWidth = "w-64";
      break;
  }

  return (
    <div className="avatar">
      <div className={`${avatarWidth} rounded`}>
        <Image
          src={avatarURL ?? ""}
          alt={userName}
          width={imgDimensions.width}
          height={imgDimensions.height}
        />
      </div>
    </div>
  );
};

export default Avatar;
