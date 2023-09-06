import React from "react";

export const Button = (props: React.PropsWithChildren) => {
  return <button className="bg-gold text-red">{props.children}</button>;
};
