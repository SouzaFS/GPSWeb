'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SocialMediaButton(type: IconProp){
    
    
    return(
        <button className="p-3 rounded-full">
            <FontAwesomeIcon icon={type} />
        </button>
    )
}