import { Component } from 'react';
import { register } from 'concent';
import { Button, Card, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import { useModule, concentEmit, contextOn } from '@/services/concent';

@register('counter')
class DemoClass extends Component<any, { num: number }> {
  // 此时 setState 提交的状态触发自己重渲染
  // 同时也会触发其他同样属于 counter 模块的实例且消费了具体数据的实例重渲染
  inc = () => {
    const num = this.state.num + 1;
    this.setState({ num });
    concentEmit('countChange', num);
  };

  render() {
    const { num } = this.state;

    return (
      <div>
        <h1>class component: {num}</h1>
        <Button onClick={this.inc}>increase()</Button>
      </div>
    );
  }
}

export function DemoFunction() {
  const { state, setState } = useModule('counter');

  const inc = () => {
    const num = state.num + 1;
    setState({ num });
    concentEmit('countChange', num);
  };

  return (
    <div>
      <h1>function component: {state.num}</h1>
      <Button onClick={inc}>increase()</Button>
    </div>
  );
}

function getCountChangeText(count: number) {
  return `update by "countChange" event, count: ${count}`;
}

export function EventListener() {
  const { state } = useModule('counter', {
    setup(ctx) {
      contextOn(ctx)('countChange', (count) => {
        console.log('countChange', count);
        const countChangeNode = document.querySelector('#countChange');
        if (countChangeNode) {
          countChangeNode.innerHTML = getCountChangeText(count);
        }
      });
    },
  });

  return <div id='countChange'>{getCountChangeText(state.num)}</div>;
}

export default function HelloWorld() {
  return (
    <PageContainer>
      <Card>
        <DemoClass />
        <Divider />
        <DemoFunction />
        <Divider />
        <EventListener />
      </Card>
    </PageContainer>
  );
}
