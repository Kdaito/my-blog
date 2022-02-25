import { HtmlProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import React, { ClassAttributes, HTMLAttributes } from "react";

export const H1 = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement>
) => (
  <h1
    {...props}
    className="text-[17px] md:text-[32px] font-bold mt-[20px] my-[35px] shadow-md px-[10px] py-[12px] border-l-[5px] border-pointMain-100 rounded-sm"
  >
    {props.children}
  </h1>
);
export const H2 = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement>
) => (
  <h1
    {...props}
    className="text-[16px] md:text-[27px] font-medium border-b-[2px] px-[10px] py-[6px] my-[20px] border-[#dcdcdc]"
  >
    {props.children}
  </h1>
);
export const H3 = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement>
) => (
  <h1 {...props} className="text-[15px] md:text-[22px] my-[20px]">
    {props.children}
  </h1>
);
export const P = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement>
) => (
  <p {...props} className="text-[13px] md:text-[16px] leading-7 md:leading-8 tracking-wide my-[20px]">
    {props.children}
  </p>
);
export const A = (
  props: ClassAttributes<HTMLAnchorElement> & HTMLAttributes<HTMLAnchorElement>
) => (
  <a {...props} className="text-[13px] md:text-[16px] hover:underline md:text-[#4B75C8]">
    {props.children}
  </a>
);
export const BlockQuote = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement>
) => (
  <blockquote
    {...props}
    className="border-l-[3px] rounded-sm border-[#828282] pl-[10px] my-[20px]"
  >
    {props.children}
  </blockquote>
);
export const UL = (
  props: ClassAttributes<HTMLUListElement> &
    HTMLAttributes<HTMLUListElement> & { ordered: boolean }
) => {
  const { ordered, ...others } = props;
  return (
    <ul {...others} className="my-[20px]">
      {props.children}
    </ul>
  );
};

export const OL = (
  props: ClassAttributes<HTMLOListElement> &
    HTMLAttributes<HTMLOListElement> & { ordered: boolean }
) => {
  const { ordered, ...others } = props;
  return (
    <ol {...others} className="my-[20px]">
      {props.children}
    </ol>
  );
};

export const LI = (
  props: ClassAttributes<HTMLLIElement> &
    HTMLAttributes<HTMLLIElement> & { ordered: boolean }
) => {
  const { ordered, ...others } = props;
  const listStyle = ordered ? "list-decimal" : "list-disc";
  return (
    <li {...others} className={`${listStyle} list-inside leading-7 md:leading-8`}>
      {props.children}
    </li>
  );
};
export const HR = (
  props: ClassAttributes<HTMLHRElement> & HTMLAttributes<HTMLHRElement>
) => (
  <hr
    {...props}
    className="my-[30px] h-[3px] border-none bg-[#dcdcdc] rounded-xl"
  >
    {props.children}
  </hr>
);

export const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);
