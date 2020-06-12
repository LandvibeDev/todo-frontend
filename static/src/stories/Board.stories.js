// import React from 'react';
// import Board from "../component/Board";
//
// export default {
//     title: 'components|basic/Board', // 스토리북에서 보여질 그룹과 경로를 명시
//     component: Board // 어떤 컴포넌트를 문서화 할지 명시
// };
//
// export const standard = () =><Board className='first'/>
// export const big = () => <Board className='second'/>

import React from 'react';
import Board from "../page/Board";


export default {
    title: 'MyComponent',
    decorators: [storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>],
};

export const normal = () => <Board />;
export const special = () => <Board className='first'/>
special.story = {
    decorators: [storyFn => <div style={{ border: '5px solid red' }}>{storyFn()}</div>],
    parameters: {
        notes: 'Special'
    }
};

