
import React from "react";
// 리액트 컴포넌트는 함수형태로 작성할 수도 있고 클래스 형태로도 작성할 수 있다. 지금은 함수로 작성하는 방법만 알아보기.
function Hello({color,name, isSpecial}) {
    return (
        <div style={{color}}>
            {/*{ isSpecial ? <b>*</b> : null }*/}
            { isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
// 이 코드는 Hello라는 컴포넌트를 내보내겠다는 의미이다.