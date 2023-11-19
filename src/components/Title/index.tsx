import * as S from "./styles";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <S.Wrapper>
      <S.Title>{text}</S.Title>
    </S.Wrapper>
  );
};

export default Title;
