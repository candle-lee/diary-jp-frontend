import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

const ImageSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-slate-300 rounded-tl-2xl rounded-bl-2xl px-4 py-6 sm:px-0 lg:py-0">
      <div className="max-w-md xl:max-w-xl">
        <Link
          target="_blank"
          to="https://udata.co.jp/"
          className="mb-4 flex items-center text-2xl font-semibold text-white"
        >
          <img
            className="mr-2 h-80 w-80"
            src="https://storage.cloud.google.com/udata-test/img/company_logo.svg"
            alt="logo"
            loading="eager"
          />
        </Link>
        <div className="flex items-center divide-x divide-primary-500">
          <Avatar.Group>
            <Avatar
              alt="bonnie avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              rounded
              stacked
            />
            <Avatar
              alt="jese avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              rounded
              stacked
            />
            <Avatar
              alt="roberta avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              rounded
              stacked
            />
            <Avatar
              alt="thomas avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
              rounded
              stacked
            />
          </Avatar.Group>
          <a href="#" className="pl-3 text-white dark:text-white sm:pl-5">
            <span className="text-sm text-primary-200">
              Over <span className="font-medium text-white">15.7k</span>
              &nbsp;Happy Customers
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
