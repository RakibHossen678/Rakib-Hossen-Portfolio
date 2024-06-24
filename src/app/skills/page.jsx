import React from 'react'; 
import Image from 'next/image';
const page = () => {
  return (
    <div>
      <div
        className="hero min-h-[300px]"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="text-center py-5 ">
            <h1 className="text-4xl text-primary  font-font-semibold">Skills</h1>
            <p className="text-white pt-1 font-medium">My Technical Level</p>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
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
      </div>
    </div>
  );
};

export default page;
