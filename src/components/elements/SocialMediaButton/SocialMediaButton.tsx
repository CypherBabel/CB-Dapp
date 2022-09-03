import { Button, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bodyStreamToNodeStream } from 'next/dist/server/body-streams';
import { faTwitter, faDiscord, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'


const SocialMediaButton = () => {
    return (
        <HStack spacing={5}>
            <a href="https://google.com">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://google.com">
                <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://google.com">
                <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href="https://google.com">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </HStack>
    )
}

export default SocialMediaButton