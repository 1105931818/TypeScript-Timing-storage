import { Dictionaries } from "../enum"
export interface StorageCls {
    get:<T> (key: Key) => result<T>
    set:<T> (key: Key, value: T, expire: Expire) => void
    remove: (key: Key) => void
    clear: () => void
}

export type Key = string

export type Expire = Dictionaries.permanent | number

export interface Data<T> {
    value: T,
    [Dictionaries.expire]: Expire
}

export interface result<T> {
    message: string,
    value: T | null
}
