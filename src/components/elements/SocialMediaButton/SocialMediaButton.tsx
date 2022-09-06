import { HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const SocialMediaButton = () => {
  return (
    <HStack spacing={5}>
      <a href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://discord.com">
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a href="https://medium.com">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </HStack>
  );
};

export default SocialMediaButton;
