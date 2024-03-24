/* 사용방법
    - 사용하려는 페이지에 import
    import theme from '/theme';


    ex) app.css.ts 폴더에 있음
 */


const theme = {
    // 레이아웃
    layout: '#f9f9fc',

    // 헤더
    header: 'rgba(249,249,252,0.8)',

    // 버튼
    blue: '#1892EB',
    blueActive: '#007ed5',
    blueGray: '#9CB0BE',

    // 박스
    skyblue: '#DDF1FF',
    skyblueActive: '#99c9ea',
    orange: '#FFEFE0',

    // 그림자
    shadow: '#e8e8e8',
    modalShadow: '#b4b4b4',


    // 계좌 관련 (이름은 은행명으로 바꾸어도 됨)
    brown: '#8E8070',
    cyan: '#2ECFCB',

    // others
    gray: '#667783',
    lightgray: '#EFEFEF',
    lightbrown: '#9B9B9B',
    line: '#CCDEEB',
        // 즐겨찾기
    yellow: '#FFE483',
    lightGray: '#D2D2D2',

        // 대신내기
    red:  '#F43A51',
    lightred: '#FFF3E8',
    
    // 카카오
    kakao: '#FEE500',
};

export default theme;