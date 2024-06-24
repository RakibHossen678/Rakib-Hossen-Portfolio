import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="my-20">
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-10">
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/html.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={80}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/css.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={80}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/tailwind.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={80}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/javascript.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={70}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/react.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={70}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/nextjs.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={50}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
        <Image alt="html" width={62} height={62} src='/expressjs.png'/>
          <progress
            className="progress progress-primary w-72 h-3"
            value={40}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
        <Image alt="html" width={62} height={62} src='/mongodb.png'/>

          <progress
            className="progress progress-primary w-72 h-3"
            value={40}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/firebase.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={40}
            max="100"
          ></progress>
        </div>
        <div className="flex  items-center space-x-4">
          <Image alt="html" width={62} height={62} src="/github.png" />
          <progress
            className="progress progress-primary w-72 h-3"
            value={50}
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
