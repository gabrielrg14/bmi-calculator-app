import { View, Text, FlatList } from "react-native";

import styles from "./styles";

import { BmiResult } from "../../@types/BmiResult";

type ListingProps = {
  list: BmiResult[];
};

const Listing = ({ list }: ListingProps) => {
  return (
    <View style={styles.listingView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...list].reverse()}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Calculate to display results here
          </Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.bmiText}>
            {item.bmi} <Text style={styles.messageText}>({item.message})</Text>
          </Text>
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

export default Listing;
