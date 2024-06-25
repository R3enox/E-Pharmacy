import { DeviceTypes } from './deviceTypes';

const RecommendLimit = {
  [DeviceTypes.MOBILE]: 2,
  [DeviceTypes.TABLET]: 8,
  [DeviceTypes.DESKTOP]: 10,
};

const RecommendBooksLimit = {
  [DeviceTypes.MOBILE]: 3,
  [DeviceTypes.TABLET]: 3,
  [DeviceTypes.DESKTOP]: 3,
};

export { RecommendLimit, RecommendBooksLimit };
