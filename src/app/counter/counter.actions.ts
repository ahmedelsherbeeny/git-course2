import { createAction, props } from "@ngrx/store";

export const _Increment=createAction('increment')
export const _Decrement=createAction('decrement')
export const _Reset=createAction('reset')
export const _CustomIncrement=createAction('custominc',props<{count:number}>())

export const _ChangeDevName=createAction('changeDevName')