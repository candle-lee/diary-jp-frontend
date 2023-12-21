import { Avatar } from "flowbite-react";

interface DefaultAvatarProps {
  size: string;
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({
  size,
}: {
  size: string;
}) => {
  return (
    <div
      className={`rounded-full ring ring-white ring-offset-base-100 ring-offset-2 mx-auto`}
    >
      <Avatar
        size={size}
        color={"light"}
        alt="avatar of Jese"
        img="https://storage.googleapis.com/udata-test/img/avatar1.png"
        rounded
      />
    </div>
  );
};

export default DefaultAvatar;
