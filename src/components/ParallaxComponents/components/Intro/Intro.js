import React from 'react';
import style from './Intro.scss';
import Svg from '../Svg/Svg';
import { Parallax } from 'react-scroll-parallax';
import ring from '!!raw-loader!./ring-of-dots.svg';
import hemispheres from '!!raw-loader!./hemispheres.svg';
import logo1 from '!!raw-loader!../../../../images/logo1.svg'
import logo2 from '!!raw-loader!../../../../images/logo2.svg'

const Intro = () => (
    <div className={style.root}>
        <div className={style.container}>
            <Parallax
                offsetYMin={-100}
                offsetYMax={100}
                className={style.ring}
            >
                <Svg svg={logo1} />
            </Parallax>
            <Parallax
                offsetYMin={-50}
                offsetYMax={50}
                className={style.circle}
            >
                <div className={style.circleInner}/>
            </Parallax>
            <Svg
                className={style.hemispheres}
                svg={logo2}
            />
        </div>
    </div>
);

export default Intro;
