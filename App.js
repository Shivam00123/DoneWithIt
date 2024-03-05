import Screen from "./app/components/Screen";
import AddListing from "./app/components/Listings/AddListing";

export default function App() {
  // return <WelcomeScreen />;
  return (
    <Screen>
      {/* <AppTextInput />
      <Switch value={value} onValueChange={(newValue) => setValue(newValue)} /> */}
      <AddListing />
    </Screen>
  );
}
