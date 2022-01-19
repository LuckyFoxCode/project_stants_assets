import { FC } from 'react';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'logo': {
      return (
        <svg className={className} viewBox="0 0 38 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.27778 14.7549L14.0741 0L17.2407 5.4902L11.963 14.7549L16.537 22.6471L13.0185 28.1373L5.27778 14.7549Z" />
          <path d="M17.9444 6.86275L14.7778 12.3529L15.8333 13.7255H22.1667L17.9444 6.86275Z" />
          <path d="M16.1852 20.2451L13.0185 14.7549H29.2037L38 29.5098H31.6667L26.037 20.2451H16.1852Z" />
          <path d="M24.9815 21.2745H19L13.7222 29.5098H3.16667L0 34.6569L17.2407 35L24.9815 21.2745Z" />
          <path d="M27.0926 24.0196H24.6296L21.463 29.5098H30.2593L27.0926 24.0196Z" />
          <path d="M11.2593 26.7647L8.09259 21.6176L3.51852 28.1373H10.2037L11.2593 26.7647Z" />
        </svg>
      );
    }
    default:
      return null;
  }
};

export default Icon;
