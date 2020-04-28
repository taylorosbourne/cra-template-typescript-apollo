import React, { FC } from 'react';

import { Logo } from '../../components';

interface Props {
  imgs: string[];
}

const ImgContainer: FC<Props> = ({ imgs }) => (
  <div style={{width: `100%`, display: `flex`, justifyContent: `flex-start`, alignItems: `center`}}>
    {imgs && imgs.map((img, i) => {
      return (
        <Logo key={i} img={img} />
      )
    })}
  </div>
);

export default ImgContainer;
