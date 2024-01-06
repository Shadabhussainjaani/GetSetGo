import React from 'react';

import { mainStack } from '../config/navigator';

import { createStackNavigator } from '@react-navigation/stack';

import UserDetails from '../screens/Auth/UserDetails';
import SelectAvatar from '../screens/selectAvatar/SelectAvatar';
import HomeTabs from './home-tabs';
import Home from '../screens/tabScreens/home/Home';
import ScheduleEvent from '../screens/scheduleEvent/ScheduleEvent';
import EventComponent from '../screens/tabScreens/home/upcomingEvents/EventComponent';
import UpcomingEvents from '../screens/events/UpcomingEvents';
import MemoriesScreen from '../screens/memories/MemoriesScreen';
import AddMemory from '../screens/memories/addMemory/AddMemory';
import Filters from '../screens/memories/filters/Filters';
import MemoryDescription from '../screens/memories/memoryDescription/MemoryDescription';
import CompetitionDetails from '../screens/competition/CompetitionDetails';
import GamingScreen from '../screens/gamimgScreen/GamingScreen';
import GameRules from '../screens/gameRules/GameRules';
import Notifications from '../screens/notification/Notifications';
import FAQ from '../screens/profile/faq/FAQ';
import TermsOfUse from '../screens/profile/termsOfUse/TermsOfUse';
import PrivacyPolicy from '../screens/profile/privacyPolicy/PrivacyPolicy';
import AboutUs from '../screens/profile/aboutUs/AboutUs';
import InvitePeople from '../screens/invite/InvitePeople';
import EventDetails from '../screens/eventDetails/EventDetails';
import LetsPlay from '../screens/letsPlay/LetsPlay';
import SelectGame from '../screens/selectGame/SelectGame';
import ScoreKeeper from '../screens/popUps/scoreKeeperPopup/ScoreKeeper';
import InvitedPlayers from '../components/invitedPlayers/InvitedPlayers';
import PlayAsPopup from '../screens/popUps/playAsPopup/PlayAsPopup';
import CreateTeam from '../screens/createTeam/CreateTeam';
import CameraInfo from '../screens/camera/CameraInfo';
import TeamSelection from '../screens/popUps/teamSelectionPopup/TeamSelection';
import BonusPopup from '../screens/popUps/bonusPopup/BonusPopup';
import ManuallyScoring from '../screens/popUps/manuallyScorePopup/ManuallyScoring';
import CameraCapture from '../screens/cameraCapture/CameraCapture';
import ScoreBoard from '../components/scoreBoard/ScoreBoard';
import EditTeamPopup from '../screens/popUps/editTeamPopup/EditTeamPopup';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function MainStack(py) {
  // console.log("🚀 ~ file: main-stack.js ~ line 52 ~ MainStack ~ py", py)
  // const screen_1 = useSelector((state) => state?.auth.get('signUpVerifyOtp')).screen;
  // const screen_2 = useSelector((state) => state?.auth.get('forgotPasswordVerifyOtp')).screen;

  return (
    <Stack.Navigator
      initialRouteName={mainStack.homeTabs}
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.homeTabs}
        component={HomeTabs}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.Home}
        component={Home}
      /> */}

      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.ScheduleEvent}
        component={ScheduleEvent}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.UpcomingEvents}
        component={UpcomingEvents}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.MemoriesScreen}
        component={MemoriesScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.AddMemory}
        component={AddMemory}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.Filters}
        component={Filters}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.MemoryDescription}
        component={MemoryDescription}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.CompetitionDetails}
        component={CompetitionDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.GamingScreen}
        component={GamingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.GameRules}
        component={GameRules}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.Notifications}
        component={Notifications}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.FAQ}
        component={FAQ}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.TermsOfUse}
        component={TermsOfUse}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.PrivacyPolicy}
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.AboutUs}
        component={AboutUs}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.InvitePeople}
        component={InvitePeople}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.EventDetails}
        component={EventDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.SelectGame}
        component={SelectGame}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.LetsPlay}
        component={LetsPlay}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.ScoreKeeper}
        component={ScoreKeeper}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.InvitedPlayers}
        component={InvitedPlayers}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.PlayAsPopup}
        component={PlayAsPopup}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.CreateTeam}
        component={CreateTeam}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.CameraInfo}
        component={CameraInfo}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.TeamSelection}
        component={TeamSelection}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.BonusPopup}
        component={BonusPopup}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.ManuallyScoring}
        component={ManuallyScoring}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.CameraCapture}
        component={CameraCapture}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.ScoreBoard}
        component={ScoreBoard}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={mainStack.EditTeamPopup}
        component={EditTeamPopup}
      />

      {/*  <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.login}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.childProducts}
        component={ChildProducts}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.otp}
        component={OTPScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.TrackOrder}
        component={TrackOrder}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.login_mobile}
        component={LoginMobile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.signin_mobile}
        component={SignInMobile}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.register}
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.forgot}
        component={Forgot}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.blog}
        component={Blog}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.checkout}
        component={Checkout}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.webview_checkout}
        component={WeViewCheckout}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.webView}
        component={webView}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.webview_payment}
        component={WeViewPayment}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.webview_thank_you}
        component={WeViewThankYou}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.products}
        component={Products}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.search}
        component={Search}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.product}
        component={Product}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.product_review}
        component={ProductReview}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.product_review_form}
        component={ProductReviewForm}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.product_description}
        component={ProductDescription}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.product_attribute}
        component={ProductAttribute}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.refine}
        component={Refine}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.filter_category}
        component={FilterCategory}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.filter_price}
        component={FilterPrice}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.filter_tag}
        component={FilterTag}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.filter_attribute}
        component={FilterAttribute}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.stores}
        component={Stores}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.store_detail}
        component={StoreDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.store_review}
        component={StoreReview}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.linking_webview}
        component={LinkingWebview}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.setting}
        component={SettingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.contact}
        component={ContactScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.help}
        component={HelpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.account}
        component={AccountScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.change_password}
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.address_book}
        component={AddressBookScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.order_list}
        component={OrderList}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.order_detail}
        component={OrderDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.demo_config}
        component={DemoConfig}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.edit_account}
        component={EditAccount}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.downloads}
        component={Downloads}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.page}
        component={Page}
      /> */}
    </Stack.Navigator>
  );
}

export default MainStack;
