import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const Homepage = () => {
const user = false;
  return <div> {user ? <HomeScreen /> : <AuthScreen />}  </div>;
};
export default Homepage;