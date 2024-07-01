import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-5  grid-cols-1 gap-16  my-10">
        <div className=" border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20 ">
          <Image alt="html" width={62} height={62} src="/html.png" />
          <h1 className="text-lg font-medium ">HTML</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/css.png" />
          <h1 className="text-lg font-medium ">CSS</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/tailwind.png" />
          <h1 className="text-lg font-medium ">Tailwind CSS</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/javascript.png" />
          <h1 className="text-lg font-medium ">JavaScript</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/react.png" />
          <h1 className="text-lg font-medium ">React JS</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/nextjs.png" />
          <h1 className="text-lg font-medium ">Next JS</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/expressjs.png" />
          <h1 className="text-lg font-medium ">Express JS</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/mongodb.png" />

          <h1 className="text-lg font-medium ">MongoDB</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/firebase.png" />
          <h1 className="text-lg font-medium ">Firebase</h1>
        </div>
        <div className="border-2 flex justify-center flex-col items-center py-4 rounded-md hover:scale-105 hover:bg-primary/20">
          <Image alt="html" width={62} height={62} src="/github.png" />
          <h1 className="text-lg font-medium ">Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
