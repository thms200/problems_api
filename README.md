# Problem Page 구현

* [Tech Stack](https://github.com/thms200/problems_api#Tech-Stack)
* [Install](https://github.com/thms200/problemst_api#Install)
* [Features](https://github.com/thms200/problems_api#Features)
* [Challenge](https://github.com/thms200/problems_api#Challenge)


## Tech Stack
- ES2015+
- React
- Redux
- styeld components
- ESLint
- Node.js, Express


## Install
Client와 Server를 각각 Clone하고, Clone 한 각 디렉토리에서 npm을 설치합니다.
설치 후 Server를 먼저 실행하고, Client 실행하면 local 환경에서 구현 가능합니다. 

### [Client](https://github.com/thms200/problems)
```
git clone https://github.com/thms200/problems.git
cd problems
npm install
npm start
```

### [Sever](https://github.com/thms200/problems_api)
```
git clone https://github.com/thms200/problems_api.git
cd problems_api
npm install
npm start
```


## Features
- 화면의 왼쪽은 `문제리스트`, 오른쪽은 `유사문제 리스트`를 나타내는 영역입니다.
- 각 문제 유형은 `problems_api`라는 간단한 서버 api를 통해 응답받습니다.
- `유사문힝`을 클릭하면 `유사문제 리스트`를 확인할 수 있습니다.
- `유사문힝`을 클릭하면 문제리스트에서 `유사문항`으로 선택된 문제의 `이름`이 오른편 상단에 나타납니다.
- `유사문항`을 클릭하지 않으면 `유사문항 버튼을 누르면 해당 문제의 유사 문항을 볼 수 있습니다.`라는 텍스트가 확인됩니다.
- `삭제`를 클릭하면 `문제리스트` 중 선택된 문제가 삭제됩니다.
- `문제리스트`는 삭제 혹은 추가될 때마다 리스트의 Numbering도 함께 업데이트됩니다.
- `추가`를 틀릭하면 해당 문제가 `유사문항`으로 선정된 문제의 바로 밑 문제로 추가됩니다.
- `교체`를 클릭하면 `유사문힝`으로 선택된 문제와 `교체`로 선택된 문제가 서로 맞교환됩니다.


## Challenge
- redux 상태 관리 라이브러리를 이용하여 상태관리를 하였습니다.

  현재 과제는 규모가 크지 않은 application이고, 상태를 업데이트하는 Problems, Button 컴포넌트를 재사용하고 있기 때문에 Root컴포넌트(App 컴포넌트)에서 상태를 업데이트하는 함수를 관리합니다. 따라서 redux가 반드시 필요한 상황은 아닙니다.
  
  그러나 application의 규모가 클수록, 또 컴포넌트에서 관리해야할 상태가 많고, 상태를 업데이트 하는 로직이 복잡하다면 글로벌 상태 관리 라이브러리를 이용하는 것이 필수이므로 redux를 적용하였습니다.
  
- 성능 향상, 가독성 등을 위해 컴포넌트를 재사용할 수 있도록 고민했습니다.

  화면의 좌측, 우측의 문제리스트는 랜더링 되는 문제의 내용은 다르지만 뷰 로직은 동일합니다. 이를 Problems라는 컴포넌트를 재사용하여 구현하였습니다.
  
  또 문제리스트의 정보를 변경하는 유사문항/삭제/추가/교체라는 버튼이 있었는데 Button 컴포넌트를 재사용하여 구현하되, 상태를 업데이트 하는 로직은 Root 컴포넌트에서 구현 후 props로 전달하여 Button에서 실행만 될 수 있도록 구현하였습니다.
