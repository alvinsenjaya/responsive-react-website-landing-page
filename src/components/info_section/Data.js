import MobileAppsSvg from '../../images/mobile_apps.svg';
import DataReportSvg from '../../images/data_report.svg';
import ApproveSvg from '../../images/approve.svg';

export const AboutData = {
  id: 'about',
  lightBg: false,
  lightText: true,
  imgStart: false,
  topLine: 'Sed egestas',
  headline: 'Quam sit amet feugiat gravida',
  description: 'Estibulum rhoncus est odio, nec pretium libero malesuada quis. Etiam suscipit sapien eu magna blandit.',
  buttonLabel: 'Get Started',
  buttonDark: "true",
  buttonPrimary: "true",
  imgSource: DataReportSvg,
  imgAlt: 'Sed egestas',
}

export const DiscoverData = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  imgStart: true,
  topLine: 'Nunc semper ullamcorper',
  headline: 'Euismod quis urna a, ultricies lobortis orci',
  description: ' Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  buttonLabel: 'Get Started',
  buttonDark: "false",
  buttonPrimary: "false",
  imgSource: MobileAppsSvg,
  imgAlt: 'Nunc semper ullamcorper',
}

export const SignupData = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  imgStart: false,
  topLine: 'Praesent convallis',
  headline: 'Massa non convallis tristique',
  description: 'Pellentesque ultricies lectus nec augue varius malesuada. Curabitur consequat sit amet dolor imperdiet blandit.',
  buttonLabel: 'Start Now',
  buttonDark: "false",
  buttonPrimary: "false",
  imgSource: ApproveSvg,
  imgAlt: 'Praesent convallis',
}