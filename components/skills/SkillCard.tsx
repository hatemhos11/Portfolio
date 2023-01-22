import Image, { StaticImageData } from "next/image";
import React from "react";

type SkillType = {
    src: StaticImageData
    title: string
}
const SkillCard = ({src , title}:SkillType ) => {
    return (
		<div className='skills__card popup' data-content={title}>
			<Image
				src={src}
				alt={title}
				fill
				className='skills__card__img'
				style={{ objectFit: 'contain' }}
				draggable={false}
				// loading='lazy'
			/>
		</div>
	);
};

export default SkillCard;
