# My Issue

앱 실행시 sdkVersion 관련 오류 발생하면 expo-cli update 후 컴퓨터 재시작한다.
- expo-cli update
npm update -g
npm uninstall expo-cli -g
npm cache clean --force
npm install 
-g expo-clie

## node update 이후 문제
- expo start error : error Invalid regular expression: /(.\fixtures\.|node_modules[\]react[\]dist[\].|website\node_modules\.|heapCapture\bundle.js|.\tests\.)$/: Unterminated character class. Run CLI with --verbose flag for more details.
- solution: https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start
- var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];


## Project Set Up
yarn -global install node yarn npm expo-cli

expo init PROJECT_NAME
cd PROJECT_NAME
code .

git remote add orgin master GIT_REMOTE_URL
git add .
git commit -m "Expo init"

yarn add expo-font expo-asset prop-types styled-components axios @expo/vector-icons react-navigation react-navigation-tabs
yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
yarn add react-native-swiper


## Expo Start
Expo :
Xcode 안드로이드스튜디오 구분없이 RN으로 개발가능.
빌드 스토어등록 등록한어플 업데이트 자동 기능(새로운버전 퍼블리쉬 불필요)
어플을 수정하고 업데이트하는데 시간을 매우 단축.

- Android
Expo 애플리케이션 설치 
connection - Tuunnel 변경 후 Expo어플로 QR코드 스캔해서 테스트 가능

- ios
Expo 사이트에서 계정 생성
~ expo login
아이폰에서도 로그인하면 테스트할 수 있는 어플을 아이폰에서 제공

- expo start - 앱 실행


# Nomad Movies

ios/ Android Movie Discovery App build
with React Native.


## Screens

- [ ] Movies
- [ ] TV Shows
- [ ] Search
- [ ] Detail


## API Verbs

- [x] Top Rated (TV)
- [x] Popular (TV, X)
- [x] Airing Today (TV)
- [x] TV Show Detail
- [x] Movie Detail
- [x] Search (Movie, TV)