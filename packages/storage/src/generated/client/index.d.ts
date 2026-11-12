
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Taste
 * 
 */
export type Taste = $Result.DefaultSelection<Prisma.$TastePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taste`: Exposes CRUD operations for the **Taste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tastes
    * const tastes = await prisma.taste.findMany()
    * ```
    */
  get taste(): Prisma.TasteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Card: 'Card',
    Taste: 'Taste'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "card" | "taste"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Taste: {
        payload: Prisma.$TastePayload<ExtArgs>
        fields: Prisma.TasteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>
          }
          findFirst: {
            args: Prisma.TasteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>
          }
          findMany: {
            args: Prisma.TasteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>[]
          }
          create: {
            args: Prisma.TasteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>
          }
          createMany: {
            args: Prisma.TasteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>[]
          }
          delete: {
            args: Prisma.TasteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>
          }
          update: {
            args: Prisma.TasteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>
          }
          deleteMany: {
            args: Prisma.TasteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>[]
          }
          upsert: {
            args: Prisma.TasteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TastePayload>
          }
          aggregate: {
            args: Prisma.TasteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaste>
          }
          groupBy: {
            args: Prisma.TasteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasteCountArgs<ExtArgs>
            result: $Utils.Optional<TasteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    card?: CardOmit
    taste?: TasteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    tastes: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tastes?: boolean | CardCountOutputTypeCountTastesArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountTastesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tastes?: boolean | Card$tastesArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tastes?: boolean | Card$tastesArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      tastes: Prisma.$TastePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tastes<T extends Card$tastesArgs<ExtArgs> = {}>(args?: Subset<T, Card$tastesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly username: FieldRef<"Card", 'String'>
    readonly password: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
    readonly updatedAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.tastes
   */
  export type Card$tastesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    where?: TasteWhereInput
    orderBy?: TasteOrderByWithRelationInput | TasteOrderByWithRelationInput[]
    cursor?: TasteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasteScalarFieldEnum | TasteScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Taste
   */

  export type AggregateTaste = {
    _count: TasteCountAggregateOutputType | null
    _avg: TasteAvgAggregateOutputType | null
    _sum: TasteSumAggregateOutputType | null
    _min: TasteMinAggregateOutputType | null
    _max: TasteMaxAggregateOutputType | null
  }

  export type TasteAvgAggregateOutputType = {
    id: number | null
    cardId: number | null
  }

  export type TasteSumAggregateOutputType = {
    id: number | null
    cardId: number | null
  }

  export type TasteMinAggregateOutputType = {
    id: number | null
    title: string | null
    isMandatory: boolean | null
    isPrivate: boolean | null
    value: string | null
    cardId: number | null
  }

  export type TasteMaxAggregateOutputType = {
    id: number | null
    title: string | null
    isMandatory: boolean | null
    isPrivate: boolean | null
    value: string | null
    cardId: number | null
  }

  export type TasteCountAggregateOutputType = {
    id: number
    title: number
    isMandatory: number
    isPrivate: number
    value: number
    cardId: number
    _all: number
  }


  export type TasteAvgAggregateInputType = {
    id?: true
    cardId?: true
  }

  export type TasteSumAggregateInputType = {
    id?: true
    cardId?: true
  }

  export type TasteMinAggregateInputType = {
    id?: true
    title?: true
    isMandatory?: true
    isPrivate?: true
    value?: true
    cardId?: true
  }

  export type TasteMaxAggregateInputType = {
    id?: true
    title?: true
    isMandatory?: true
    isPrivate?: true
    value?: true
    cardId?: true
  }

  export type TasteCountAggregateInputType = {
    id?: true
    title?: true
    isMandatory?: true
    isPrivate?: true
    value?: true
    cardId?: true
    _all?: true
  }

  export type TasteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taste to aggregate.
     */
    where?: TasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tastes to fetch.
     */
    orderBy?: TasteOrderByWithRelationInput | TasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tastes
    **/
    _count?: true | TasteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasteMaxAggregateInputType
  }

  export type GetTasteAggregateType<T extends TasteAggregateArgs> = {
        [P in keyof T & keyof AggregateTaste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaste[P]>
      : GetScalarType<T[P], AggregateTaste[P]>
  }




  export type TasteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasteWhereInput
    orderBy?: TasteOrderByWithAggregationInput | TasteOrderByWithAggregationInput[]
    by: TasteScalarFieldEnum[] | TasteScalarFieldEnum
    having?: TasteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasteCountAggregateInputType | true
    _avg?: TasteAvgAggregateInputType
    _sum?: TasteSumAggregateInputType
    _min?: TasteMinAggregateInputType
    _max?: TasteMaxAggregateInputType
  }

  export type TasteGroupByOutputType = {
    id: number
    title: string
    isMandatory: boolean
    isPrivate: boolean
    value: string
    cardId: number
    _count: TasteCountAggregateOutputType | null
    _avg: TasteAvgAggregateOutputType | null
    _sum: TasteSumAggregateOutputType | null
    _min: TasteMinAggregateOutputType | null
    _max: TasteMaxAggregateOutputType | null
  }

  type GetTasteGroupByPayload<T extends TasteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasteGroupByOutputType[P]>
            : GetScalarType<T[P], TasteGroupByOutputType[P]>
        }
      >
    >


  export type TasteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isMandatory?: boolean
    isPrivate?: boolean
    value?: boolean
    cardId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taste"]>

  export type TasteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isMandatory?: boolean
    isPrivate?: boolean
    value?: boolean
    cardId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taste"]>

  export type TasteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isMandatory?: boolean
    isPrivate?: boolean
    value?: boolean
    cardId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taste"]>

  export type TasteSelectScalar = {
    id?: boolean
    title?: boolean
    isMandatory?: boolean
    isPrivate?: boolean
    value?: boolean
    cardId?: boolean
  }

  export type TasteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isMandatory" | "isPrivate" | "value" | "cardId", ExtArgs["result"]["taste"]>
  export type TasteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type TasteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type TasteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $TastePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taste"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      isMandatory: boolean
      isPrivate: boolean
      value: string
      cardId: number
    }, ExtArgs["result"]["taste"]>
    composites: {}
  }

  type TasteGetPayload<S extends boolean | null | undefined | TasteDefaultArgs> = $Result.GetResult<Prisma.$TastePayload, S>

  type TasteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasteCountAggregateInputType | true
    }

  export interface TasteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taste'], meta: { name: 'Taste' } }
    /**
     * Find zero or one Taste that matches the filter.
     * @param {TasteFindUniqueArgs} args - Arguments to find a Taste
     * @example
     * // Get one Taste
     * const taste = await prisma.taste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasteFindUniqueArgs>(args: SelectSubset<T, TasteFindUniqueArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasteFindUniqueOrThrowArgs} args - Arguments to find a Taste
     * @example
     * // Get one Taste
     * const taste = await prisma.taste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasteFindUniqueOrThrowArgs>(args: SelectSubset<T, TasteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteFindFirstArgs} args - Arguments to find a Taste
     * @example
     * // Get one Taste
     * const taste = await prisma.taste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasteFindFirstArgs>(args?: SelectSubset<T, TasteFindFirstArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteFindFirstOrThrowArgs} args - Arguments to find a Taste
     * @example
     * // Get one Taste
     * const taste = await prisma.taste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasteFindFirstOrThrowArgs>(args?: SelectSubset<T, TasteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tastes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tastes
     * const tastes = await prisma.taste.findMany()
     * 
     * // Get first 10 Tastes
     * const tastes = await prisma.taste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasteWithIdOnly = await prisma.taste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasteFindManyArgs>(args?: SelectSubset<T, TasteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taste.
     * @param {TasteCreateArgs} args - Arguments to create a Taste.
     * @example
     * // Create one Taste
     * const Taste = await prisma.taste.create({
     *   data: {
     *     // ... data to create a Taste
     *   }
     * })
     * 
     */
    create<T extends TasteCreateArgs>(args: SelectSubset<T, TasteCreateArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tastes.
     * @param {TasteCreateManyArgs} args - Arguments to create many Tastes.
     * @example
     * // Create many Tastes
     * const taste = await prisma.taste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasteCreateManyArgs>(args?: SelectSubset<T, TasteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tastes and returns the data saved in the database.
     * @param {TasteCreateManyAndReturnArgs} args - Arguments to create many Tastes.
     * @example
     * // Create many Tastes
     * const taste = await prisma.taste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tastes and only return the `id`
     * const tasteWithIdOnly = await prisma.taste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasteCreateManyAndReturnArgs>(args?: SelectSubset<T, TasteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taste.
     * @param {TasteDeleteArgs} args - Arguments to delete one Taste.
     * @example
     * // Delete one Taste
     * const Taste = await prisma.taste.delete({
     *   where: {
     *     // ... filter to delete one Taste
     *   }
     * })
     * 
     */
    delete<T extends TasteDeleteArgs>(args: SelectSubset<T, TasteDeleteArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taste.
     * @param {TasteUpdateArgs} args - Arguments to update one Taste.
     * @example
     * // Update one Taste
     * const taste = await prisma.taste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasteUpdateArgs>(args: SelectSubset<T, TasteUpdateArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tastes.
     * @param {TasteDeleteManyArgs} args - Arguments to filter Tastes to delete.
     * @example
     * // Delete a few Tastes
     * const { count } = await prisma.taste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasteDeleteManyArgs>(args?: SelectSubset<T, TasteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tastes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tastes
     * const taste = await prisma.taste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasteUpdateManyArgs>(args: SelectSubset<T, TasteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tastes and returns the data updated in the database.
     * @param {TasteUpdateManyAndReturnArgs} args - Arguments to update many Tastes.
     * @example
     * // Update many Tastes
     * const taste = await prisma.taste.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tastes and only return the `id`
     * const tasteWithIdOnly = await prisma.taste.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TasteUpdateManyAndReturnArgs>(args: SelectSubset<T, TasteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taste.
     * @param {TasteUpsertArgs} args - Arguments to update or create a Taste.
     * @example
     * // Update or create a Taste
     * const taste = await prisma.taste.upsert({
     *   create: {
     *     // ... data to create a Taste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taste we want to update
     *   }
     * })
     */
    upsert<T extends TasteUpsertArgs>(args: SelectSubset<T, TasteUpsertArgs<ExtArgs>>): Prisma__TasteClient<$Result.GetResult<Prisma.$TastePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tastes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteCountArgs} args - Arguments to filter Tastes to count.
     * @example
     * // Count the number of Tastes
     * const count = await prisma.taste.count({
     *   where: {
     *     // ... the filter for the Tastes we want to count
     *   }
     * })
    **/
    count<T extends TasteCountArgs>(
      args?: Subset<T, TasteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasteAggregateArgs>(args: Subset<T, TasteAggregateArgs>): Prisma.PrismaPromise<GetTasteAggregateType<T>>

    /**
     * Group by Taste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TasteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasteGroupByArgs['orderBy'] }
        : { orderBy?: TasteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TasteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taste model
   */
  readonly fields: TasteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Taste model
   */
  interface TasteFieldRefs {
    readonly id: FieldRef<"Taste", 'Int'>
    readonly title: FieldRef<"Taste", 'String'>
    readonly isMandatory: FieldRef<"Taste", 'Boolean'>
    readonly isPrivate: FieldRef<"Taste", 'Boolean'>
    readonly value: FieldRef<"Taste", 'String'>
    readonly cardId: FieldRef<"Taste", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Taste findUnique
   */
  export type TasteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * Filter, which Taste to fetch.
     */
    where: TasteWhereUniqueInput
  }

  /**
   * Taste findUniqueOrThrow
   */
  export type TasteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * Filter, which Taste to fetch.
     */
    where: TasteWhereUniqueInput
  }

  /**
   * Taste findFirst
   */
  export type TasteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * Filter, which Taste to fetch.
     */
    where?: TasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tastes to fetch.
     */
    orderBy?: TasteOrderByWithRelationInput | TasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tastes.
     */
    cursor?: TasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tastes.
     */
    distinct?: TasteScalarFieldEnum | TasteScalarFieldEnum[]
  }

  /**
   * Taste findFirstOrThrow
   */
  export type TasteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * Filter, which Taste to fetch.
     */
    where?: TasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tastes to fetch.
     */
    orderBy?: TasteOrderByWithRelationInput | TasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tastes.
     */
    cursor?: TasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tastes.
     */
    distinct?: TasteScalarFieldEnum | TasteScalarFieldEnum[]
  }

  /**
   * Taste findMany
   */
  export type TasteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * Filter, which Tastes to fetch.
     */
    where?: TasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tastes to fetch.
     */
    orderBy?: TasteOrderByWithRelationInput | TasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tastes.
     */
    cursor?: TasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tastes.
     */
    distinct?: TasteScalarFieldEnum | TasteScalarFieldEnum[]
  }

  /**
   * Taste create
   */
  export type TasteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * The data needed to create a Taste.
     */
    data: XOR<TasteCreateInput, TasteUncheckedCreateInput>
  }

  /**
   * Taste createMany
   */
  export type TasteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tastes.
     */
    data: TasteCreateManyInput | TasteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taste createManyAndReturn
   */
  export type TasteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * The data used to create many Tastes.
     */
    data: TasteCreateManyInput | TasteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taste update
   */
  export type TasteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * The data needed to update a Taste.
     */
    data: XOR<TasteUpdateInput, TasteUncheckedUpdateInput>
    /**
     * Choose, which Taste to update.
     */
    where: TasteWhereUniqueInput
  }

  /**
   * Taste updateMany
   */
  export type TasteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tastes.
     */
    data: XOR<TasteUpdateManyMutationInput, TasteUncheckedUpdateManyInput>
    /**
     * Filter which Tastes to update
     */
    where?: TasteWhereInput
    /**
     * Limit how many Tastes to update.
     */
    limit?: number
  }

  /**
   * Taste updateManyAndReturn
   */
  export type TasteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * The data used to update Tastes.
     */
    data: XOR<TasteUpdateManyMutationInput, TasteUncheckedUpdateManyInput>
    /**
     * Filter which Tastes to update
     */
    where?: TasteWhereInput
    /**
     * Limit how many Tastes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taste upsert
   */
  export type TasteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * The filter to search for the Taste to update in case it exists.
     */
    where: TasteWhereUniqueInput
    /**
     * In case the Taste found by the `where` argument doesn't exist, create a new Taste with this data.
     */
    create: XOR<TasteCreateInput, TasteUncheckedCreateInput>
    /**
     * In case the Taste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasteUpdateInput, TasteUncheckedUpdateInput>
  }

  /**
   * Taste delete
   */
  export type TasteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
    /**
     * Filter which Taste to delete.
     */
    where: TasteWhereUniqueInput
  }

  /**
   * Taste deleteMany
   */
  export type TasteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tastes to delete
     */
    where?: TasteWhereInput
    /**
     * Limit how many Tastes to delete.
     */
    limit?: number
  }

  /**
   * Taste without action
   */
  export type TasteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taste
     */
    select?: TasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taste
     */
    omit?: TasteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CardScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const TasteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isMandatory: 'isMandatory',
    isPrivate: 'isPrivate',
    value: 'value',
    cardId: 'cardId'
  };

  export type TasteScalarFieldEnum = (typeof TasteScalarFieldEnum)[keyof typeof TasteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    username?: StringFilter<"Card"> | string
    password?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    tastes?: TasteListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tastes?: TasteOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    password?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    tastes?: TasteListRelationFilter
  }, "id" | "username">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    username?: StringWithAggregatesFilter<"Card"> | string
    password?: StringWithAggregatesFilter<"Card"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type TasteWhereInput = {
    AND?: TasteWhereInput | TasteWhereInput[]
    OR?: TasteWhereInput[]
    NOT?: TasteWhereInput | TasteWhereInput[]
    id?: IntFilter<"Taste"> | number
    title?: StringFilter<"Taste"> | string
    isMandatory?: BoolFilter<"Taste"> | boolean
    isPrivate?: BoolFilter<"Taste"> | boolean
    value?: StringFilter<"Taste"> | string
    cardId?: IntFilter<"Taste"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type TasteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isMandatory?: SortOrder
    isPrivate?: SortOrder
    value?: SortOrder
    cardId?: SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type TasteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TasteWhereInput | TasteWhereInput[]
    OR?: TasteWhereInput[]
    NOT?: TasteWhereInput | TasteWhereInput[]
    title?: StringFilter<"Taste"> | string
    isMandatory?: BoolFilter<"Taste"> | boolean
    isPrivate?: BoolFilter<"Taste"> | boolean
    value?: StringFilter<"Taste"> | string
    cardId?: IntFilter<"Taste"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type TasteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isMandatory?: SortOrder
    isPrivate?: SortOrder
    value?: SortOrder
    cardId?: SortOrder
    _count?: TasteCountOrderByAggregateInput
    _avg?: TasteAvgOrderByAggregateInput
    _max?: TasteMaxOrderByAggregateInput
    _min?: TasteMinOrderByAggregateInput
    _sum?: TasteSumOrderByAggregateInput
  }

  export type TasteScalarWhereWithAggregatesInput = {
    AND?: TasteScalarWhereWithAggregatesInput | TasteScalarWhereWithAggregatesInput[]
    OR?: TasteScalarWhereWithAggregatesInput[]
    NOT?: TasteScalarWhereWithAggregatesInput | TasteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taste"> | number
    title?: StringWithAggregatesFilter<"Taste"> | string
    isMandatory?: BoolWithAggregatesFilter<"Taste"> | boolean
    isPrivate?: BoolWithAggregatesFilter<"Taste"> | boolean
    value?: StringWithAggregatesFilter<"Taste"> | string
    cardId?: IntWithAggregatesFilter<"Taste"> | number
  }

  export type CardCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tastes?: TasteCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tastes?: TasteUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tastes?: TasteUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tastes?: TasteUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasteCreateInput = {
    title: string
    isMandatory?: boolean
    isPrivate?: boolean
    value?: string
    card: CardCreateNestedOneWithoutTastesInput
  }

  export type TasteUncheckedCreateInput = {
    id?: number
    title: string
    isMandatory?: boolean
    isPrivate?: boolean
    value?: string
    cardId: number
  }

  export type TasteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
    card?: CardUpdateOneRequiredWithoutTastesNestedInput
  }

  export type TasteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type TasteCreateManyInput = {
    id?: number
    title: string
    isMandatory?: boolean
    isPrivate?: boolean
    value?: string
    cardId: number
  }

  export type TasteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TasteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TasteListRelationFilter = {
    every?: TasteWhereInput
    some?: TasteWhereInput
    none?: TasteWhereInput
  }

  export type TasteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type TasteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isMandatory?: SortOrder
    isPrivate?: SortOrder
    value?: SortOrder
    cardId?: SortOrder
  }

  export type TasteAvgOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
  }

  export type TasteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isMandatory?: SortOrder
    isPrivate?: SortOrder
    value?: SortOrder
    cardId?: SortOrder
  }

  export type TasteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isMandatory?: SortOrder
    isPrivate?: SortOrder
    value?: SortOrder
    cardId?: SortOrder
  }

  export type TasteSumOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TasteCreateNestedManyWithoutCardInput = {
    create?: XOR<TasteCreateWithoutCardInput, TasteUncheckedCreateWithoutCardInput> | TasteCreateWithoutCardInput[] | TasteUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TasteCreateOrConnectWithoutCardInput | TasteCreateOrConnectWithoutCardInput[]
    createMany?: TasteCreateManyCardInputEnvelope
    connect?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
  }

  export type TasteUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<TasteCreateWithoutCardInput, TasteUncheckedCreateWithoutCardInput> | TasteCreateWithoutCardInput[] | TasteUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TasteCreateOrConnectWithoutCardInput | TasteCreateOrConnectWithoutCardInput[]
    createMany?: TasteCreateManyCardInputEnvelope
    connect?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TasteUpdateManyWithoutCardNestedInput = {
    create?: XOR<TasteCreateWithoutCardInput, TasteUncheckedCreateWithoutCardInput> | TasteCreateWithoutCardInput[] | TasteUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TasteCreateOrConnectWithoutCardInput | TasteCreateOrConnectWithoutCardInput[]
    upsert?: TasteUpsertWithWhereUniqueWithoutCardInput | TasteUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TasteCreateManyCardInputEnvelope
    set?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    disconnect?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    delete?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    connect?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    update?: TasteUpdateWithWhereUniqueWithoutCardInput | TasteUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TasteUpdateManyWithWhereWithoutCardInput | TasteUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TasteScalarWhereInput | TasteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TasteUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<TasteCreateWithoutCardInput, TasteUncheckedCreateWithoutCardInput> | TasteCreateWithoutCardInput[] | TasteUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TasteCreateOrConnectWithoutCardInput | TasteCreateOrConnectWithoutCardInput[]
    upsert?: TasteUpsertWithWhereUniqueWithoutCardInput | TasteUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TasteCreateManyCardInputEnvelope
    set?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    disconnect?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    delete?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    connect?: TasteWhereUniqueInput | TasteWhereUniqueInput[]
    update?: TasteUpdateWithWhereUniqueWithoutCardInput | TasteUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TasteUpdateManyWithWhereWithoutCardInput | TasteUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TasteScalarWhereInput | TasteScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutTastesInput = {
    create?: XOR<CardCreateWithoutTastesInput, CardUncheckedCreateWithoutTastesInput>
    connectOrCreate?: CardCreateOrConnectWithoutTastesInput
    connect?: CardWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CardUpdateOneRequiredWithoutTastesNestedInput = {
    create?: XOR<CardCreateWithoutTastesInput, CardUncheckedCreateWithoutTastesInput>
    connectOrCreate?: CardCreateOrConnectWithoutTastesInput
    upsert?: CardUpsertWithoutTastesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutTastesInput, CardUpdateWithoutTastesInput>, CardUncheckedUpdateWithoutTastesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TasteCreateWithoutCardInput = {
    title: string
    isMandatory?: boolean
    isPrivate?: boolean
    value?: string
  }

  export type TasteUncheckedCreateWithoutCardInput = {
    id?: number
    title: string
    isMandatory?: boolean
    isPrivate?: boolean
    value?: string
  }

  export type TasteCreateOrConnectWithoutCardInput = {
    where: TasteWhereUniqueInput
    create: XOR<TasteCreateWithoutCardInput, TasteUncheckedCreateWithoutCardInput>
  }

  export type TasteCreateManyCardInputEnvelope = {
    data: TasteCreateManyCardInput | TasteCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type TasteUpsertWithWhereUniqueWithoutCardInput = {
    where: TasteWhereUniqueInput
    update: XOR<TasteUpdateWithoutCardInput, TasteUncheckedUpdateWithoutCardInput>
    create: XOR<TasteCreateWithoutCardInput, TasteUncheckedCreateWithoutCardInput>
  }

  export type TasteUpdateWithWhereUniqueWithoutCardInput = {
    where: TasteWhereUniqueInput
    data: XOR<TasteUpdateWithoutCardInput, TasteUncheckedUpdateWithoutCardInput>
  }

  export type TasteUpdateManyWithWhereWithoutCardInput = {
    where: TasteScalarWhereInput
    data: XOR<TasteUpdateManyMutationInput, TasteUncheckedUpdateManyWithoutCardInput>
  }

  export type TasteScalarWhereInput = {
    AND?: TasteScalarWhereInput | TasteScalarWhereInput[]
    OR?: TasteScalarWhereInput[]
    NOT?: TasteScalarWhereInput | TasteScalarWhereInput[]
    id?: IntFilter<"Taste"> | number
    title?: StringFilter<"Taste"> | string
    isMandatory?: BoolFilter<"Taste"> | boolean
    isPrivate?: BoolFilter<"Taste"> | boolean
    value?: StringFilter<"Taste"> | string
    cardId?: IntFilter<"Taste"> | number
  }

  export type CardCreateWithoutTastesInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUncheckedCreateWithoutTastesInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardCreateOrConnectWithoutTastesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutTastesInput, CardUncheckedCreateWithoutTastesInput>
  }

  export type CardUpsertWithoutTastesInput = {
    update: XOR<CardUpdateWithoutTastesInput, CardUncheckedUpdateWithoutTastesInput>
    create: XOR<CardCreateWithoutTastesInput, CardUncheckedCreateWithoutTastesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutTastesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutTastesInput, CardUncheckedUpdateWithoutTastesInput>
  }

  export type CardUpdateWithoutTastesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateWithoutTastesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasteCreateManyCardInput = {
    id?: number
    title: string
    isMandatory?: boolean
    isPrivate?: boolean
    value?: string
  }

  export type TasteUpdateWithoutCardInput = {
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TasteUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TasteUncheckedUpdateManyWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    value?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}