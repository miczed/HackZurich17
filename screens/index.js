import { Navigation } from 'react-native-navigation';

import SearchScreen from './SearchScreen';
import PointsScreen from './PointsScreen';
import RewardsScreen from './RewardsScreen';
import OnboardingScreen from './OnboardingScreen';
import ConnectionsScreen from './ConnectionsScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('peakpass.SearchScreen', () => SearchScreen);
    Navigation.registerComponent('peakpass.PointsScreen', () => PointsScreen);
    Navigation.registerComponent('peakpass.RewardsScreen', () => RewardsScreen);
    Navigation.registerComponent('peakpass.OnboardingScreen', () => OnboardingScreen);
    Navigation.registerComponent('peakpass.ConnectionsScreen', () => ConnectionsScreen);
}