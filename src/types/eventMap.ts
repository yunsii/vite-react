// 推荐将事件名统一维护在 configs某处
// import * as ev from 'configs/constant/event';

/**
 * 管理所有事件名对应参数类型的 mappedType
 */
export interface EvMap {
  'someEvent': [number, string],
}
