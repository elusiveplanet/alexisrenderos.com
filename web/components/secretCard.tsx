import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { DarkText } from "../utils/colors";

const SecretCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
`;

const SecretButton = styled.button`
  height: 2.5em;
  width: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  background-color: #ffaeea;
`;

const SecretButtonText = styled.p`
  color: ${DarkText};
`;

const SecretImageWrapper = styled.div`
  height: 10em;
  width: 10em;
`;

const SecretCard = () => {
  const [secretDialogState, setSecretDialogState] = useState(false);

  const handleSecretButton = () => {
    setSecretDialogState((prev) => !prev);
  };

  return (
    <SecretCardBody>
      <SecretButton onClick={() => handleSecretButton()}>
        <SecretButtonText>Test Text</SecretButtonText>
      </SecretButton>
      <p>{secretDialogState}</p>
      {!!secretDialogState && (
        <>
          <SecretImageWrapper>
            <Image
              src="/images/pixelHeart.webp"
              layout="responsive"
              width={40}
              height={40}
              alt="A red pixelated heart with a black background."
            />
          </SecretImageWrapper>
          <p>Hi :)</p>
        </>
      )}
    </SecretCardBody>
  );
};

export default SecretCard;
