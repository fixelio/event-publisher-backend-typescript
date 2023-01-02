enum MaybeType {
  None = 'None',
  Some = 'Some',
}

type Some<T> = {
  type: typeof MaybeType.Some;
  value: T;
}

type None = {
  type: typeof MaybeType.None;
  value: null;
}

type Maybe<T> = None | Some<T>;

const None = (): None => ({
  type: MaybeType.None,
  value: null,
});

const Some = <T>(value: T): Some<T> => ({
  value,
  type: MaybeType.Some,
});

const isNone = <T>(data: Maybe<T>): boolean => data.type === MaybeType.None;
const isSome = <T>(data: Maybe<T>): boolean => data.type === MaybeType.Some;

const createMaybe = <T>(value?: T): Maybe<T> => {
  return value !== undefined && value !== null ? Some(value) : None();
}

export {
  Maybe,
  None,
  Some,
  isNone,
  isSome,
  createMaybe
}