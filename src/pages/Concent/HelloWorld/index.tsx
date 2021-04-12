import { Component } from 'react';
import { register, useConcent } from 'concent';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

@register('counter')
class DemoCls extends Component<any, { num: number }> {
  // 此时 setState 提交的状态触发自己重渲染
  // 同时也会触发其他同样属于 counter 模块的实例且消费了具体数据的实例重渲染
  inc = () => this.setState({ num: this.state.num + 1 });

  render() {
    const { num } = this.state;

    return (
      <div>
        <h1>class comp: {num}</h1>
        <button onClick={this.inc}>inc()</button>
      </div>
    );
  }
}

export function DemoFn() {
  const { state, setState } = useConcent('counter');
  const inc = () => setState({ num: state.num + 1 });

  return (
    <div>
      <h1>fn comp: {state.num}</h1>
      <button onClick={inc}>inc()</button>
    </div>
  );
}

export default function HelloWorld() {
  return (
    <PageContainer>
      <Card>
        <DemoCls />
        <DemoFn />
      </Card>
    </PageContainer>
  );
}
