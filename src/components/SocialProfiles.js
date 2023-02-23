import React from "react";
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { link, image} = props.socialProfile;
    return (
        <span>
            <a href={link}>
            <img src={image} alt='profile' style={{ width: 35, height: 35, margin: 10}}/>
            </a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h3>Connect with Me!</h3>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                    )
                )
            }
        </div>
    </div>
)

export default SocialProfiles;