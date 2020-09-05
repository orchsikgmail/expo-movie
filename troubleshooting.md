# Troubleshooting

## Index

- [개요](#개요)
- [빌드 & 스토어업로드 장애](#빌드-&-스토어업로드-장애)
- [운영 장애](#운영-장애)
- [README.md 바로가기](./README.md "ReadMe.md 바로가기")


## 개요
배포 및 운영 중 장애가 발생했을 때 처리해야 하는 방법을 설명  
주로 배포 중 장애는 서비스 세션이 잘 끊기도록 시간차를 두어야 하는 서비스와 배포를 그냥해도 되는 서비스를 구분하여 관리해야 함


## 개발환경
- Application loader v: 3.7.1
- Xcode version: 10
- sdkVersion : 33


## 빌드 & 스토어업로드 장애

### 공통사항
- [app.json] - [sdkVersion]과 [package.json] - [dependency] - [expo] 일치해야 한다.

- 스토어에서 검색해도 안 나온다.
    - [app.json] - [description]으로 스토어에 앱이 노출될 검색어를 지정할 수 있다. 

- 처음 빌드시 Expo를 통해 생성한 인증파일(keyStore 또는 cert)을 백업해야한다. 
    - 인증파일은 앱을 스토어에 제출 & 업데이트 할 때 마다 필요하다. 일반적으로 Expo 계정과 연결 되어 저장되어 있지만 프로젝트를 삭제하거나 인증파일이 지워진 경우 필요하다.
        - 구글 : $ expo fetch:android:keystore
        - 애플 : $ expo fetch:ios:certs 

- errono:-4048
    - 해결 : $ npm cache verify

- expo connect econnrefused 127.0.0.1:19001
    - expo start와 expo build 포트 충돌
    - 해결 : 프로젝트 루트 경로의 .expo 폴더 삭제 후 진행 하던 작업 진행

- expo start error : error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.
    - 원인 : This is caused by node v12.11.0 due to the way it deals regular location
    - 해결 : \node_modules\metro-config\src\defaults\blacklist.js 수정
    ```
        var sharedBlacklist = [
            /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
            /website\/node_modules\/.*/,
            /heapCapture\/bundle\.js/,
            /.*\/__tests__\/.*/
        ];
    ```
    - https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start


### 구글스토어
- 구글 개발자 콘솔에서 .apk 파일 등록시 API Level 오류
    - 원인 : sdkVersion이 구글에서 지정한 targetSdkVersion 보다 낮은 경우 발생. Expo sdkVersion별로 지원하는 react-native가 다르다. react-native 버전별로 지원하는 targetSdkVersion이 다르다.
    - 해결 : Expo sdkVersion 변경.
        - https://developer.android.com/distribute/best-practices/develop/target-sdk?hl=ko

- 구글 개발자 콘솔에서 .apk 파일 등록시 개인정보처리 방침 필요
    - 원인 : "CAMERA", "RECORD_AUDIO", "READ_PHONE_STATE", "READ_CONTACTS" 권한 사용시 [개인정보처리방침] 필요.
    - 해결 : [구글개발자콘솔] - [스토어등록정보] - [개인정보처리방침] URL 등록


### 애플스토어
- 권한 요구 메시지 설명 부족으로 심사 탈락 
    - 원인 : 디바이스 접근 관련 권한을 요청할 때, 이유를 구체적으로 설명하지 않음.
    - 해결 : [app.json] - [ios] - [infoPlist] 구체적으로 작성.

- 동일한 버전이 이미 업로드되어 실패하는 경우.
    - CFBundleVersion & CFBundleShortVersionString
    - CFBundleVersion : 배포와 상관없이 정의한 버전
        - [app.json] - [ios] - [buildNumber]
    - CFBundleShortVersionString : 배포 버전
        - [app.json] - [version]
    - 개발자가 설정하는 부분 동일한 값으로 지정해도 무관.
    - Applicaion Loader 사용시 [app.json] - [version]으로 두 버전이 동일하게 지정된다.
    - 해결 : 위에서 설명한 버전 수정.

- Application Loader로 업로드 시, ERROR ITMS-90596 에러.
    - 원인 : Xcode 버전 9 이하에서 Applicaion Loader로 Expo App 업로드 하는 경우.
    - 해결 : Xcode를 10으로 변경

- Xcode 11 이슈
    - Xcode11에는 Applicaion Loader 프로그램이 기본 포함되지 않는다.
    - expo upload 명령어 사용도 불가능한 상태.
    - 해결 1) : [Manually uploading] 사용.
        - https://docs.expo.io/versions/latest/distribution/uploading-apps/#2
    - 해결 2) : Application Loader를 별도로 설치해서 사용.
    - 해결 3) : Xcode 10 사용.

    - '19.11.29 (https://docs.expo.io/versions/v35.0.0/distribution/uploading-apps/#2)
    - 애플 ApplicationLoader -> Transporter 로 프로그램 변경
    - expo 명령어 사용가능

## 운영 장애
- 운영 장애 케이스1  
    - 운영 장애 케이스1에 대한 설명과 해결 방법

- 운영 장애 케이스2
    - 운영 장애 케이스2에 대한 설명과 해결 방법
