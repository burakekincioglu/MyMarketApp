/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { LogBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';


LogBox.ignoreAllLogs(); // warning'leri engeller

AppRegistry.registerComponent(appName, () => App);
