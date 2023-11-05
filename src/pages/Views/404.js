import React from 'react';

import { Button } from 'components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-ink text-center flex flex-col h-screen w-screen items-center justify-center gap-y-4">
      <div className=" border border-default-border flex w-full md:w-2/3 h-52">
        <h2 className="text-ink-dark text-title1 font-semibold w-full m-auto ">
          404
        </h2>
        <p className=" font-bold text-large m-auto border-l-2 border-default-border ml-4 p-8 w-full">
          This Page could not be found
        </p>
      </div>
      <Button
        text="Back Home"
        className="w-40 h-12 bg-primary"
        textVariant="white"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default NotFound;
