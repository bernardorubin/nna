import React from 'react';
import style from './Overlap.scss';
import Svg from '../Svg/Svg';
import { Parallax } from 'react-scroll-parallax';
import circle from '!!raw-loader!./circle.svg';
import logo1 from '!!raw-loader!../../../../images/logo1.svg'
import logo2 from '!!raw-loader!../../../../images/logo2.svg'


const Overlap = () => (
    <div className={style.root}>
        <div className={style.container}>
            <Parallax
                offsetYMax={150}
                offsetYMin={-50}
                offsetXMax={-40}
                offsetXMin={20}
                className={style.circle}
            >
                <Svg
                    svg={logo1}
                />
            </Parallax>
            <Parallax
                offsetYMax={150}
                offsetYMin={-50}
                offsetXMax={40}
                offsetXMin={-60}
                className={style.circleRings}
            >
                <Svg
                    svg={logo2}
                />
            </Parallax>
        </div>
    </div>
);

export default Overlap;
