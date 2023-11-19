import { FlatList } from "react-native";

import * as S from "./styles";

import { BmiResult } from "../../@types/BmiResult";

type ListingProps = {
  list: BmiResult[];
};

const Listing = ({ list }: ListingProps) => {
  return (
    <S.Wrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...list].reverse()}
        ListEmptyComponent={() => (
          <S.EmptyText>Calculate to display results here</S.EmptyText>
        )}
        renderItem={({ item }) => (
          <S.ResultItem>
            {item.bmi} <S.ItemMessage>({item.message})</S.ItemMessage>
          </S.ResultItem>
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </S.Wrapper>
  );
};

export default Listing;
