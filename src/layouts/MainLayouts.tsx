import  { ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full px-2 md:px-10 py-4 md:py-10">
      <div className="">{children}</div>
    </div>
  );
};

export default Main;
