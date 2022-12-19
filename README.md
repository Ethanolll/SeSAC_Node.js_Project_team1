## 레시피~

[개발순서]
1. develop 으로 checkout
2. develop pull 꼭!!
```
git checkout develop
git pull --all
git checkout -b feature/피처이름
  ex) git checkout -b feature/register_ui

개발작업

git add .
git commit -m "feat: 설명 or 무슨 기능인지" # 최대한 작은 단위로
  ex) git commit -m "feat: Design register button"
  ex) git commit -m "feat: Design input text"
git push origin feature/피처이름

https://github.com/Sesac-NodeJS-Project-Team1/SeSAC_Node.js_Project_team1/pr 에서

1) pull request 만들기
2) merge 해서 pull request 상태를 open 에서 merged 로 바꾸기
```
3. feature은 최대 2일까지만 가져가기 ( 2일이 넘을 거 같으며 코드에 오류 없이 수정해서 pull request 올리기 )


# 수정
