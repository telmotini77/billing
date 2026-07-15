
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BillingInvoice
 * 
 */
export type BillingInvoice = $Result.DefaultSelection<Prisma.$BillingInvoicePayload>
/**
 * Model BillingInvoiceItem
 * 
 */
export type BillingInvoiceItem = $Result.DefaultSelection<Prisma.$BillingInvoiceItemPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BillingInvoices
 * const billingInvoices = await prisma.billingInvoice.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more BillingInvoices
   * const billingInvoices = await prisma.billingInvoice.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.billingInvoice`: Exposes CRUD operations for the **BillingInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingInvoices
    * const billingInvoices = await prisma.billingInvoice.findMany()
    * ```
    */
  get billingInvoice(): Prisma.BillingInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingInvoiceItem`: Exposes CRUD operations for the **BillingInvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingInvoiceItems
    * const billingInvoiceItems = await prisma.billingInvoiceItem.findMany()
    * ```
    */
  get billingInvoiceItem(): Prisma.BillingInvoiceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    BillingInvoice: 'BillingInvoice',
    BillingInvoiceItem: 'BillingInvoiceItem',
    User: 'User',
    Employee: 'Employee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "billingInvoice" | "billingInvoiceItem" | "user" | "employee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BillingInvoice: {
        payload: Prisma.$BillingInvoicePayload<ExtArgs>
        fields: Prisma.BillingInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>
          }
          findFirst: {
            args: Prisma.BillingInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>
          }
          findMany: {
            args: Prisma.BillingInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>[]
          }
          create: {
            args: Prisma.BillingInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>
          }
          createMany: {
            args: Prisma.BillingInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>[]
          }
          delete: {
            args: Prisma.BillingInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>
          }
          update: {
            args: Prisma.BillingInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>
          }
          deleteMany: {
            args: Prisma.BillingInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>[]
          }
          upsert: {
            args: Prisma.BillingInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoicePayload>
          }
          aggregate: {
            args: Prisma.BillingInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingInvoice>
          }
          groupBy: {
            args: Prisma.BillingInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<BillingInvoiceCountAggregateOutputType> | number
          }
        }
      }
      BillingInvoiceItem: {
        payload: Prisma.$BillingInvoiceItemPayload<ExtArgs>
        fields: Prisma.BillingInvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingInvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingInvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.BillingInvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingInvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>
          }
          findMany: {
            args: Prisma.BillingInvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>[]
          }
          create: {
            args: Prisma.BillingInvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>
          }
          createMany: {
            args: Prisma.BillingInvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingInvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.BillingInvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>
          }
          update: {
            args: Prisma.BillingInvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.BillingInvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingInvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingInvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.BillingInvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingInvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.BillingInvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingInvoiceItem>
          }
          groupBy: {
            args: Prisma.BillingInvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingInvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingInvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<BillingInvoiceItemCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    billingInvoice?: BillingInvoiceOmit
    billingInvoiceItem?: BillingInvoiceItemOmit
    user?: UserOmit
    employee?: EmployeeOmit
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
   * Count Type BillingInvoiceCountOutputType
   */

  export type BillingInvoiceCountOutputType = {
    items: number
  }

  export type BillingInvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BillingInvoiceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * BillingInvoiceCountOutputType without action
   */
  export type BillingInvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceCountOutputType
     */
    select?: BillingInvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillingInvoiceCountOutputType without action
   */
  export type BillingInvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingInvoiceItemWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | UserCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BillingInvoice
   */

  export type AggregateBillingInvoice = {
    _count: BillingInvoiceCountAggregateOutputType | null
    _avg: BillingInvoiceAvgAggregateOutputType | null
    _sum: BillingInvoiceSumAggregateOutputType | null
    _min: BillingInvoiceMinAggregateOutputType | null
    _max: BillingInvoiceMaxAggregateOutputType | null
  }

  export type BillingInvoiceAvgAggregateOutputType = {
    amount: number | null
    subtotal: number | null
    iva: number | null
  }

  export type BillingInvoiceSumAggregateOutputType = {
    amount: number | null
    subtotal: number | null
    iva: number | null
  }

  export type BillingInvoiceMinAggregateOutputType = {
    id: string | null
    claveAcceso: string | null
    clientName: string | null
    amount: number | null
    subtotal: number | null
    iva: number | null
    status: string | null
    sentToClient: boolean | null
    userId: string | null
    createdAt: Date | null
  }

  export type BillingInvoiceMaxAggregateOutputType = {
    id: string | null
    claveAcceso: string | null
    clientName: string | null
    amount: number | null
    subtotal: number | null
    iva: number | null
    status: string | null
    sentToClient: boolean | null
    userId: string | null
    createdAt: Date | null
  }

  export type BillingInvoiceCountAggregateOutputType = {
    id: number
    claveAcceso: number
    clientName: number
    amount: number
    subtotal: number
    iva: number
    status: number
    sentToClient: number
    userId: number
    createdAt: number
    _all: number
  }


  export type BillingInvoiceAvgAggregateInputType = {
    amount?: true
    subtotal?: true
    iva?: true
  }

  export type BillingInvoiceSumAggregateInputType = {
    amount?: true
    subtotal?: true
    iva?: true
  }

  export type BillingInvoiceMinAggregateInputType = {
    id?: true
    claveAcceso?: true
    clientName?: true
    amount?: true
    subtotal?: true
    iva?: true
    status?: true
    sentToClient?: true
    userId?: true
    createdAt?: true
  }

  export type BillingInvoiceMaxAggregateInputType = {
    id?: true
    claveAcceso?: true
    clientName?: true
    amount?: true
    subtotal?: true
    iva?: true
    status?: true
    sentToClient?: true
    userId?: true
    createdAt?: true
  }

  export type BillingInvoiceCountAggregateInputType = {
    id?: true
    claveAcceso?: true
    clientName?: true
    amount?: true
    subtotal?: true
    iva?: true
    status?: true
    sentToClient?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type BillingInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingInvoice to aggregate.
     */
    where?: BillingInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoices to fetch.
     */
    orderBy?: BillingInvoiceOrderByWithRelationInput | BillingInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingInvoices
    **/
    _count?: true | BillingInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingInvoiceMaxAggregateInputType
  }

  export type GetBillingInvoiceAggregateType<T extends BillingInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingInvoice[P]>
      : GetScalarType<T[P], AggregateBillingInvoice[P]>
  }




  export type BillingInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingInvoiceWhereInput
    orderBy?: BillingInvoiceOrderByWithAggregationInput | BillingInvoiceOrderByWithAggregationInput[]
    by: BillingInvoiceScalarFieldEnum[] | BillingInvoiceScalarFieldEnum
    having?: BillingInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingInvoiceCountAggregateInputType | true
    _avg?: BillingInvoiceAvgAggregateInputType
    _sum?: BillingInvoiceSumAggregateInputType
    _min?: BillingInvoiceMinAggregateInputType
    _max?: BillingInvoiceMaxAggregateInputType
  }

  export type BillingInvoiceGroupByOutputType = {
    id: string
    claveAcceso: string
    clientName: string
    amount: number
    subtotal: number
    iva: number
    status: string
    sentToClient: boolean
    userId: string
    createdAt: Date
    _count: BillingInvoiceCountAggregateOutputType | null
    _avg: BillingInvoiceAvgAggregateOutputType | null
    _sum: BillingInvoiceSumAggregateOutputType | null
    _min: BillingInvoiceMinAggregateOutputType | null
    _max: BillingInvoiceMaxAggregateOutputType | null
  }

  type GetBillingInvoiceGroupByPayload<T extends BillingInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], BillingInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type BillingInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claveAcceso?: boolean
    clientName?: boolean
    amount?: boolean
    subtotal?: boolean
    iva?: boolean
    status?: boolean
    sentToClient?: boolean
    userId?: boolean
    createdAt?: boolean
    items?: boolean | BillingInvoice$itemsArgs<ExtArgs>
    _count?: boolean | BillingInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingInvoice"]>

  export type BillingInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claveAcceso?: boolean
    clientName?: boolean
    amount?: boolean
    subtotal?: boolean
    iva?: boolean
    status?: boolean
    sentToClient?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["billingInvoice"]>

  export type BillingInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claveAcceso?: boolean
    clientName?: boolean
    amount?: boolean
    subtotal?: boolean
    iva?: boolean
    status?: boolean
    sentToClient?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["billingInvoice"]>

  export type BillingInvoiceSelectScalar = {
    id?: boolean
    claveAcceso?: boolean
    clientName?: boolean
    amount?: boolean
    subtotal?: boolean
    iva?: boolean
    status?: boolean
    sentToClient?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type BillingInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "claveAcceso" | "clientName" | "amount" | "subtotal" | "iva" | "status" | "sentToClient" | "userId" | "createdAt", ExtArgs["result"]["billingInvoice"]>
  export type BillingInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BillingInvoice$itemsArgs<ExtArgs>
    _count?: boolean | BillingInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillingInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BillingInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BillingInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingInvoice"
    objects: {
      items: Prisma.$BillingInvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      claveAcceso: string
      clientName: string
      amount: number
      subtotal: number
      iva: number
      status: string
      sentToClient: boolean
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["billingInvoice"]>
    composites: {}
  }

  type BillingInvoiceGetPayload<S extends boolean | null | undefined | BillingInvoiceDefaultArgs> = $Result.GetResult<Prisma.$BillingInvoicePayload, S>

  type BillingInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingInvoiceCountAggregateInputType | true
    }

  export interface BillingInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingInvoice'], meta: { name: 'BillingInvoice' } }
    /**
     * Find zero or one BillingInvoice that matches the filter.
     * @param {BillingInvoiceFindUniqueArgs} args - Arguments to find a BillingInvoice
     * @example
     * // Get one BillingInvoice
     * const billingInvoice = await prisma.billingInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingInvoiceFindUniqueArgs>(args: SelectSubset<T, BillingInvoiceFindUniqueArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingInvoiceFindUniqueOrThrowArgs} args - Arguments to find a BillingInvoice
     * @example
     * // Get one BillingInvoice
     * const billingInvoice = await prisma.billingInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceFindFirstArgs} args - Arguments to find a BillingInvoice
     * @example
     * // Get one BillingInvoice
     * const billingInvoice = await prisma.billingInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingInvoiceFindFirstArgs>(args?: SelectSubset<T, BillingInvoiceFindFirstArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceFindFirstOrThrowArgs} args - Arguments to find a BillingInvoice
     * @example
     * // Get one BillingInvoice
     * const billingInvoice = await prisma.billingInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingInvoices
     * const billingInvoices = await prisma.billingInvoice.findMany()
     * 
     * // Get first 10 BillingInvoices
     * const billingInvoices = await prisma.billingInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingInvoiceWithIdOnly = await prisma.billingInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingInvoiceFindManyArgs>(args?: SelectSubset<T, BillingInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingInvoice.
     * @param {BillingInvoiceCreateArgs} args - Arguments to create a BillingInvoice.
     * @example
     * // Create one BillingInvoice
     * const BillingInvoice = await prisma.billingInvoice.create({
     *   data: {
     *     // ... data to create a BillingInvoice
     *   }
     * })
     * 
     */
    create<T extends BillingInvoiceCreateArgs>(args: SelectSubset<T, BillingInvoiceCreateArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingInvoices.
     * @param {BillingInvoiceCreateManyArgs} args - Arguments to create many BillingInvoices.
     * @example
     * // Create many BillingInvoices
     * const billingInvoice = await prisma.billingInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingInvoiceCreateManyArgs>(args?: SelectSubset<T, BillingInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingInvoices and returns the data saved in the database.
     * @param {BillingInvoiceCreateManyAndReturnArgs} args - Arguments to create many BillingInvoices.
     * @example
     * // Create many BillingInvoices
     * const billingInvoice = await prisma.billingInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingInvoices and only return the `id`
     * const billingInvoiceWithIdOnly = await prisma.billingInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingInvoice.
     * @param {BillingInvoiceDeleteArgs} args - Arguments to delete one BillingInvoice.
     * @example
     * // Delete one BillingInvoice
     * const BillingInvoice = await prisma.billingInvoice.delete({
     *   where: {
     *     // ... filter to delete one BillingInvoice
     *   }
     * })
     * 
     */
    delete<T extends BillingInvoiceDeleteArgs>(args: SelectSubset<T, BillingInvoiceDeleteArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingInvoice.
     * @param {BillingInvoiceUpdateArgs} args - Arguments to update one BillingInvoice.
     * @example
     * // Update one BillingInvoice
     * const billingInvoice = await prisma.billingInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingInvoiceUpdateArgs>(args: SelectSubset<T, BillingInvoiceUpdateArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingInvoices.
     * @param {BillingInvoiceDeleteManyArgs} args - Arguments to filter BillingInvoices to delete.
     * @example
     * // Delete a few BillingInvoices
     * const { count } = await prisma.billingInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingInvoiceDeleteManyArgs>(args?: SelectSubset<T, BillingInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingInvoices
     * const billingInvoice = await prisma.billingInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingInvoiceUpdateManyArgs>(args: SelectSubset<T, BillingInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingInvoices and returns the data updated in the database.
     * @param {BillingInvoiceUpdateManyAndReturnArgs} args - Arguments to update many BillingInvoices.
     * @example
     * // Update many BillingInvoices
     * const billingInvoice = await prisma.billingInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingInvoices and only return the `id`
     * const billingInvoiceWithIdOnly = await prisma.billingInvoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillingInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingInvoice.
     * @param {BillingInvoiceUpsertArgs} args - Arguments to update or create a BillingInvoice.
     * @example
     * // Update or create a BillingInvoice
     * const billingInvoice = await prisma.billingInvoice.upsert({
     *   create: {
     *     // ... data to create a BillingInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingInvoice we want to update
     *   }
     * })
     */
    upsert<T extends BillingInvoiceUpsertArgs>(args: SelectSubset<T, BillingInvoiceUpsertArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceCountArgs} args - Arguments to filter BillingInvoices to count.
     * @example
     * // Count the number of BillingInvoices
     * const count = await prisma.billingInvoice.count({
     *   where: {
     *     // ... the filter for the BillingInvoices we want to count
     *   }
     * })
    **/
    count<T extends BillingInvoiceCountArgs>(
      args?: Subset<T, BillingInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingInvoiceAggregateArgs>(args: Subset<T, BillingInvoiceAggregateArgs>): Prisma.PrismaPromise<GetBillingInvoiceAggregateType<T>>

    /**
     * Group by BillingInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceGroupByArgs} args - Group by arguments.
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
      T extends BillingInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: BillingInvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingInvoice model
   */
  readonly fields: BillingInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends BillingInvoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, BillingInvoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BillingInvoice model
   */
  interface BillingInvoiceFieldRefs {
    readonly id: FieldRef<"BillingInvoice", 'String'>
    readonly claveAcceso: FieldRef<"BillingInvoice", 'String'>
    readonly clientName: FieldRef<"BillingInvoice", 'String'>
    readonly amount: FieldRef<"BillingInvoice", 'Float'>
    readonly subtotal: FieldRef<"BillingInvoice", 'Float'>
    readonly iva: FieldRef<"BillingInvoice", 'Float'>
    readonly status: FieldRef<"BillingInvoice", 'String'>
    readonly sentToClient: FieldRef<"BillingInvoice", 'Boolean'>
    readonly userId: FieldRef<"BillingInvoice", 'String'>
    readonly createdAt: FieldRef<"BillingInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillingInvoice findUnique
   */
  export type BillingInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoice to fetch.
     */
    where: BillingInvoiceWhereUniqueInput
  }

  /**
   * BillingInvoice findUniqueOrThrow
   */
  export type BillingInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoice to fetch.
     */
    where: BillingInvoiceWhereUniqueInput
  }

  /**
   * BillingInvoice findFirst
   */
  export type BillingInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoice to fetch.
     */
    where?: BillingInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoices to fetch.
     */
    orderBy?: BillingInvoiceOrderByWithRelationInput | BillingInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingInvoices.
     */
    cursor?: BillingInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingInvoices.
     */
    distinct?: BillingInvoiceScalarFieldEnum | BillingInvoiceScalarFieldEnum[]
  }

  /**
   * BillingInvoice findFirstOrThrow
   */
  export type BillingInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoice to fetch.
     */
    where?: BillingInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoices to fetch.
     */
    orderBy?: BillingInvoiceOrderByWithRelationInput | BillingInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingInvoices.
     */
    cursor?: BillingInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingInvoices.
     */
    distinct?: BillingInvoiceScalarFieldEnum | BillingInvoiceScalarFieldEnum[]
  }

  /**
   * BillingInvoice findMany
   */
  export type BillingInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoices to fetch.
     */
    where?: BillingInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoices to fetch.
     */
    orderBy?: BillingInvoiceOrderByWithRelationInput | BillingInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingInvoices.
     */
    cursor?: BillingInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoices.
     */
    skip?: number
    distinct?: BillingInvoiceScalarFieldEnum | BillingInvoiceScalarFieldEnum[]
  }

  /**
   * BillingInvoice create
   */
  export type BillingInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingInvoice.
     */
    data: XOR<BillingInvoiceCreateInput, BillingInvoiceUncheckedCreateInput>
  }

  /**
   * BillingInvoice createMany
   */
  export type BillingInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingInvoices.
     */
    data: BillingInvoiceCreateManyInput | BillingInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingInvoice createManyAndReturn
   */
  export type BillingInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many BillingInvoices.
     */
    data: BillingInvoiceCreateManyInput | BillingInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingInvoice update
   */
  export type BillingInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingInvoice.
     */
    data: XOR<BillingInvoiceUpdateInput, BillingInvoiceUncheckedUpdateInput>
    /**
     * Choose, which BillingInvoice to update.
     */
    where: BillingInvoiceWhereUniqueInput
  }

  /**
   * BillingInvoice updateMany
   */
  export type BillingInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingInvoices.
     */
    data: XOR<BillingInvoiceUpdateManyMutationInput, BillingInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which BillingInvoices to update
     */
    where?: BillingInvoiceWhereInput
    /**
     * Limit how many BillingInvoices to update.
     */
    limit?: number
  }

  /**
   * BillingInvoice updateManyAndReturn
   */
  export type BillingInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update BillingInvoices.
     */
    data: XOR<BillingInvoiceUpdateManyMutationInput, BillingInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which BillingInvoices to update
     */
    where?: BillingInvoiceWhereInput
    /**
     * Limit how many BillingInvoices to update.
     */
    limit?: number
  }

  /**
   * BillingInvoice upsert
   */
  export type BillingInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingInvoice to update in case it exists.
     */
    where: BillingInvoiceWhereUniqueInput
    /**
     * In case the BillingInvoice found by the `where` argument doesn't exist, create a new BillingInvoice with this data.
     */
    create: XOR<BillingInvoiceCreateInput, BillingInvoiceUncheckedCreateInput>
    /**
     * In case the BillingInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingInvoiceUpdateInput, BillingInvoiceUncheckedUpdateInput>
  }

  /**
   * BillingInvoice delete
   */
  export type BillingInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
    /**
     * Filter which BillingInvoice to delete.
     */
    where: BillingInvoiceWhereUniqueInput
  }

  /**
   * BillingInvoice deleteMany
   */
  export type BillingInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingInvoices to delete
     */
    where?: BillingInvoiceWhereInput
    /**
     * Limit how many BillingInvoices to delete.
     */
    limit?: number
  }

  /**
   * BillingInvoice.items
   */
  export type BillingInvoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    where?: BillingInvoiceItemWhereInput
    orderBy?: BillingInvoiceItemOrderByWithRelationInput | BillingInvoiceItemOrderByWithRelationInput[]
    cursor?: BillingInvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingInvoiceItemScalarFieldEnum | BillingInvoiceItemScalarFieldEnum[]
  }

  /**
   * BillingInvoice without action
   */
  export type BillingInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoice
     */
    select?: BillingInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoice
     */
    omit?: BillingInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model BillingInvoiceItem
   */

  export type AggregateBillingInvoiceItem = {
    _count: BillingInvoiceItemCountAggregateOutputType | null
    _avg: BillingInvoiceItemAvgAggregateOutputType | null
    _sum: BillingInvoiceItemSumAggregateOutputType | null
    _min: BillingInvoiceItemMinAggregateOutputType | null
    _max: BillingInvoiceItemMaxAggregateOutputType | null
  }

  export type BillingInvoiceItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type BillingInvoiceItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type BillingInvoiceItemMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    quantity: number | null
  }

  export type BillingInvoiceItemMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    quantity: number | null
  }

  export type BillingInvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    productId: number
    quantity: number
    _all: number
  }


  export type BillingInvoiceItemAvgAggregateInputType = {
    quantity?: true
  }

  export type BillingInvoiceItemSumAggregateInputType = {
    quantity?: true
  }

  export type BillingInvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    quantity?: true
  }

  export type BillingInvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    quantity?: true
  }

  export type BillingInvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type BillingInvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingInvoiceItem to aggregate.
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoiceItems to fetch.
     */
    orderBy?: BillingInvoiceItemOrderByWithRelationInput | BillingInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingInvoiceItems
    **/
    _count?: true | BillingInvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingInvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingInvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingInvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingInvoiceItemMaxAggregateInputType
  }

  export type GetBillingInvoiceItemAggregateType<T extends BillingInvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingInvoiceItem[P]>
      : GetScalarType<T[P], AggregateBillingInvoiceItem[P]>
  }




  export type BillingInvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingInvoiceItemWhereInput
    orderBy?: BillingInvoiceItemOrderByWithAggregationInput | BillingInvoiceItemOrderByWithAggregationInput[]
    by: BillingInvoiceItemScalarFieldEnum[] | BillingInvoiceItemScalarFieldEnum
    having?: BillingInvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingInvoiceItemCountAggregateInputType | true
    _avg?: BillingInvoiceItemAvgAggregateInputType
    _sum?: BillingInvoiceItemSumAggregateInputType
    _min?: BillingInvoiceItemMinAggregateInputType
    _max?: BillingInvoiceItemMaxAggregateInputType
  }

  export type BillingInvoiceItemGroupByOutputType = {
    id: string
    invoiceId: string
    productId: string
    quantity: number
    _count: BillingInvoiceItemCountAggregateOutputType | null
    _avg: BillingInvoiceItemAvgAggregateOutputType | null
    _sum: BillingInvoiceItemSumAggregateOutputType | null
    _min: BillingInvoiceItemMinAggregateOutputType | null
    _max: BillingInvoiceItemMaxAggregateOutputType | null
  }

  type GetBillingInvoiceItemGroupByPayload<T extends BillingInvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingInvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingInvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingInvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], BillingInvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type BillingInvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    quantity?: boolean
    invoice?: boolean | BillingInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingInvoiceItem"]>

  export type BillingInvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    quantity?: boolean
    invoice?: boolean | BillingInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingInvoiceItem"]>

  export type BillingInvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    quantity?: boolean
    invoice?: boolean | BillingInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingInvoiceItem"]>

  export type BillingInvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type BillingInvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "productId" | "quantity", ExtArgs["result"]["billingInvoiceItem"]>
  export type BillingInvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | BillingInvoiceDefaultArgs<ExtArgs>
  }
  export type BillingInvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | BillingInvoiceDefaultArgs<ExtArgs>
  }
  export type BillingInvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | BillingInvoiceDefaultArgs<ExtArgs>
  }

  export type $BillingInvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingInvoiceItem"
    objects: {
      invoice: Prisma.$BillingInvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      productId: string
      quantity: number
    }, ExtArgs["result"]["billingInvoiceItem"]>
    composites: {}
  }

  type BillingInvoiceItemGetPayload<S extends boolean | null | undefined | BillingInvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$BillingInvoiceItemPayload, S>

  type BillingInvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingInvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingInvoiceItemCountAggregateInputType | true
    }

  export interface BillingInvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingInvoiceItem'], meta: { name: 'BillingInvoiceItem' } }
    /**
     * Find zero or one BillingInvoiceItem that matches the filter.
     * @param {BillingInvoiceItemFindUniqueArgs} args - Arguments to find a BillingInvoiceItem
     * @example
     * // Get one BillingInvoiceItem
     * const billingInvoiceItem = await prisma.billingInvoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingInvoiceItemFindUniqueArgs>(args: SelectSubset<T, BillingInvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingInvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingInvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a BillingInvoiceItem
     * @example
     * // Get one BillingInvoiceItem
     * const billingInvoiceItem = await prisma.billingInvoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingInvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingInvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingInvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemFindFirstArgs} args - Arguments to find a BillingInvoiceItem
     * @example
     * // Get one BillingInvoiceItem
     * const billingInvoiceItem = await prisma.billingInvoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingInvoiceItemFindFirstArgs>(args?: SelectSubset<T, BillingInvoiceItemFindFirstArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingInvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemFindFirstOrThrowArgs} args - Arguments to find a BillingInvoiceItem
     * @example
     * // Get one BillingInvoiceItem
     * const billingInvoiceItem = await prisma.billingInvoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingInvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingInvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingInvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingInvoiceItems
     * const billingInvoiceItems = await prisma.billingInvoiceItem.findMany()
     * 
     * // Get first 10 BillingInvoiceItems
     * const billingInvoiceItems = await prisma.billingInvoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingInvoiceItemWithIdOnly = await prisma.billingInvoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingInvoiceItemFindManyArgs>(args?: SelectSubset<T, BillingInvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingInvoiceItem.
     * @param {BillingInvoiceItemCreateArgs} args - Arguments to create a BillingInvoiceItem.
     * @example
     * // Create one BillingInvoiceItem
     * const BillingInvoiceItem = await prisma.billingInvoiceItem.create({
     *   data: {
     *     // ... data to create a BillingInvoiceItem
     *   }
     * })
     * 
     */
    create<T extends BillingInvoiceItemCreateArgs>(args: SelectSubset<T, BillingInvoiceItemCreateArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingInvoiceItems.
     * @param {BillingInvoiceItemCreateManyArgs} args - Arguments to create many BillingInvoiceItems.
     * @example
     * // Create many BillingInvoiceItems
     * const billingInvoiceItem = await prisma.billingInvoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingInvoiceItemCreateManyArgs>(args?: SelectSubset<T, BillingInvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingInvoiceItems and returns the data saved in the database.
     * @param {BillingInvoiceItemCreateManyAndReturnArgs} args - Arguments to create many BillingInvoiceItems.
     * @example
     * // Create many BillingInvoiceItems
     * const billingInvoiceItem = await prisma.billingInvoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingInvoiceItems and only return the `id`
     * const billingInvoiceItemWithIdOnly = await prisma.billingInvoiceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingInvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingInvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingInvoiceItem.
     * @param {BillingInvoiceItemDeleteArgs} args - Arguments to delete one BillingInvoiceItem.
     * @example
     * // Delete one BillingInvoiceItem
     * const BillingInvoiceItem = await prisma.billingInvoiceItem.delete({
     *   where: {
     *     // ... filter to delete one BillingInvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends BillingInvoiceItemDeleteArgs>(args: SelectSubset<T, BillingInvoiceItemDeleteArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingInvoiceItem.
     * @param {BillingInvoiceItemUpdateArgs} args - Arguments to update one BillingInvoiceItem.
     * @example
     * // Update one BillingInvoiceItem
     * const billingInvoiceItem = await prisma.billingInvoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingInvoiceItemUpdateArgs>(args: SelectSubset<T, BillingInvoiceItemUpdateArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingInvoiceItems.
     * @param {BillingInvoiceItemDeleteManyArgs} args - Arguments to filter BillingInvoiceItems to delete.
     * @example
     * // Delete a few BillingInvoiceItems
     * const { count } = await prisma.billingInvoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingInvoiceItemDeleteManyArgs>(args?: SelectSubset<T, BillingInvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingInvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingInvoiceItems
     * const billingInvoiceItem = await prisma.billingInvoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingInvoiceItemUpdateManyArgs>(args: SelectSubset<T, BillingInvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingInvoiceItems and returns the data updated in the database.
     * @param {BillingInvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many BillingInvoiceItems.
     * @example
     * // Update many BillingInvoiceItems
     * const billingInvoiceItem = await prisma.billingInvoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingInvoiceItems and only return the `id`
     * const billingInvoiceItemWithIdOnly = await prisma.billingInvoiceItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillingInvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingInvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingInvoiceItem.
     * @param {BillingInvoiceItemUpsertArgs} args - Arguments to update or create a BillingInvoiceItem.
     * @example
     * // Update or create a BillingInvoiceItem
     * const billingInvoiceItem = await prisma.billingInvoiceItem.upsert({
     *   create: {
     *     // ... data to create a BillingInvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingInvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends BillingInvoiceItemUpsertArgs>(args: SelectSubset<T, BillingInvoiceItemUpsertArgs<ExtArgs>>): Prisma__BillingInvoiceItemClient<$Result.GetResult<Prisma.$BillingInvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingInvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemCountArgs} args - Arguments to filter BillingInvoiceItems to count.
     * @example
     * // Count the number of BillingInvoiceItems
     * const count = await prisma.billingInvoiceItem.count({
     *   where: {
     *     // ... the filter for the BillingInvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends BillingInvoiceItemCountArgs>(
      args?: Subset<T, BillingInvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingInvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingInvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingInvoiceItemAggregateArgs>(args: Subset<T, BillingInvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetBillingInvoiceItemAggregateType<T>>

    /**
     * Group by BillingInvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingInvoiceItemGroupByArgs} args - Group by arguments.
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
      T extends BillingInvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingInvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: BillingInvoiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingInvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingInvoiceItem model
   */
  readonly fields: BillingInvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingInvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingInvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends BillingInvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillingInvoiceDefaultArgs<ExtArgs>>): Prisma__BillingInvoiceClient<$Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillingInvoiceItem model
   */
  interface BillingInvoiceItemFieldRefs {
    readonly id: FieldRef<"BillingInvoiceItem", 'String'>
    readonly invoiceId: FieldRef<"BillingInvoiceItem", 'String'>
    readonly productId: FieldRef<"BillingInvoiceItem", 'String'>
    readonly quantity: FieldRef<"BillingInvoiceItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BillingInvoiceItem findUnique
   */
  export type BillingInvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoiceItem to fetch.
     */
    where: BillingInvoiceItemWhereUniqueInput
  }

  /**
   * BillingInvoiceItem findUniqueOrThrow
   */
  export type BillingInvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoiceItem to fetch.
     */
    where: BillingInvoiceItemWhereUniqueInput
  }

  /**
   * BillingInvoiceItem findFirst
   */
  export type BillingInvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoiceItem to fetch.
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoiceItems to fetch.
     */
    orderBy?: BillingInvoiceItemOrderByWithRelationInput | BillingInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingInvoiceItems.
     */
    cursor?: BillingInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingInvoiceItems.
     */
    distinct?: BillingInvoiceItemScalarFieldEnum | BillingInvoiceItemScalarFieldEnum[]
  }

  /**
   * BillingInvoiceItem findFirstOrThrow
   */
  export type BillingInvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoiceItem to fetch.
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoiceItems to fetch.
     */
    orderBy?: BillingInvoiceItemOrderByWithRelationInput | BillingInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingInvoiceItems.
     */
    cursor?: BillingInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingInvoiceItems.
     */
    distinct?: BillingInvoiceItemScalarFieldEnum | BillingInvoiceItemScalarFieldEnum[]
  }

  /**
   * BillingInvoiceItem findMany
   */
  export type BillingInvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which BillingInvoiceItems to fetch.
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingInvoiceItems to fetch.
     */
    orderBy?: BillingInvoiceItemOrderByWithRelationInput | BillingInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingInvoiceItems.
     */
    cursor?: BillingInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingInvoiceItems.
     */
    skip?: number
    distinct?: BillingInvoiceItemScalarFieldEnum | BillingInvoiceItemScalarFieldEnum[]
  }

  /**
   * BillingInvoiceItem create
   */
  export type BillingInvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingInvoiceItem.
     */
    data: XOR<BillingInvoiceItemCreateInput, BillingInvoiceItemUncheckedCreateInput>
  }

  /**
   * BillingInvoiceItem createMany
   */
  export type BillingInvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingInvoiceItems.
     */
    data: BillingInvoiceItemCreateManyInput | BillingInvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingInvoiceItem createManyAndReturn
   */
  export type BillingInvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many BillingInvoiceItems.
     */
    data: BillingInvoiceItemCreateManyInput | BillingInvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingInvoiceItem update
   */
  export type BillingInvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingInvoiceItem.
     */
    data: XOR<BillingInvoiceItemUpdateInput, BillingInvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which BillingInvoiceItem to update.
     */
    where: BillingInvoiceItemWhereUniqueInput
  }

  /**
   * BillingInvoiceItem updateMany
   */
  export type BillingInvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingInvoiceItems.
     */
    data: XOR<BillingInvoiceItemUpdateManyMutationInput, BillingInvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which BillingInvoiceItems to update
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * Limit how many BillingInvoiceItems to update.
     */
    limit?: number
  }

  /**
   * BillingInvoiceItem updateManyAndReturn
   */
  export type BillingInvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update BillingInvoiceItems.
     */
    data: XOR<BillingInvoiceItemUpdateManyMutationInput, BillingInvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which BillingInvoiceItems to update
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * Limit how many BillingInvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingInvoiceItem upsert
   */
  export type BillingInvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingInvoiceItem to update in case it exists.
     */
    where: BillingInvoiceItemWhereUniqueInput
    /**
     * In case the BillingInvoiceItem found by the `where` argument doesn't exist, create a new BillingInvoiceItem with this data.
     */
    create: XOR<BillingInvoiceItemCreateInput, BillingInvoiceItemUncheckedCreateInput>
    /**
     * In case the BillingInvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingInvoiceItemUpdateInput, BillingInvoiceItemUncheckedUpdateInput>
  }

  /**
   * BillingInvoiceItem delete
   */
  export type BillingInvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which BillingInvoiceItem to delete.
     */
    where: BillingInvoiceItemWhereUniqueInput
  }

  /**
   * BillingInvoiceItem deleteMany
   */
  export type BillingInvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingInvoiceItems to delete
     */
    where?: BillingInvoiceItemWhereInput
    /**
     * Limit how many BillingInvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * BillingInvoiceItem without action
   */
  export type BillingInvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingInvoiceItem
     */
    select?: BillingInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingInvoiceItem
     */
    omit?: BillingInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    ruc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sriSimulate: boolean | null
    sriEnvironment: string | null
    signatureBase64: string | null
    signaturePassword: string | null
    isBranch: boolean | null
    parentCompanyRuc: string | null
    establishmentCode: string | null
    emissionPoint: string | null
    establishmentAddress: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    ruc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sriSimulate: boolean | null
    sriEnvironment: string | null
    signatureBase64: string | null
    signaturePassword: string | null
    isBranch: boolean | null
    parentCompanyRuc: string | null
    establishmentCode: string | null
    emissionPoint: string | null
    establishmentAddress: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    ruc: number
    createdAt: number
    updatedAt: number
    sriSimulate: number
    sriEnvironment: number
    signatureBase64: number
    signaturePassword: number
    isBranch: number
    parentCompanyRuc: number
    establishmentCode: number
    emissionPoint: number
    establishmentAddress: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    ruc?: true
    createdAt?: true
    updatedAt?: true
    sriSimulate?: true
    sriEnvironment?: true
    signatureBase64?: true
    signaturePassword?: true
    isBranch?: true
    parentCompanyRuc?: true
    establishmentCode?: true
    emissionPoint?: true
    establishmentAddress?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    ruc?: true
    createdAt?: true
    updatedAt?: true
    sriSimulate?: true
    sriEnvironment?: true
    signatureBase64?: true
    signaturePassword?: true
    isBranch?: true
    parentCompanyRuc?: true
    establishmentCode?: true
    emissionPoint?: true
    establishmentAddress?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    ruc?: true
    createdAt?: true
    updatedAt?: true
    sriSimulate?: true
    sriEnvironment?: true
    signatureBase64?: true
    signaturePassword?: true
    isBranch?: true
    parentCompanyRuc?: true
    establishmentCode?: true
    emissionPoint?: true
    establishmentAddress?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    ruc: string
    createdAt: Date
    updatedAt: Date
    sriSimulate: boolean
    sriEnvironment: string
    signatureBase64: string | null
    signaturePassword: string | null
    isBranch: boolean
    parentCompanyRuc: string | null
    establishmentCode: string
    emissionPoint: string
    establishmentAddress: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    ruc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sriSimulate?: boolean
    sriEnvironment?: boolean
    signatureBase64?: boolean
    signaturePassword?: boolean
    isBranch?: boolean
    parentCompanyRuc?: boolean
    establishmentCode?: boolean
    emissionPoint?: boolean
    establishmentAddress?: boolean
    employees?: boolean | User$employeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    ruc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sriSimulate?: boolean
    sriEnvironment?: boolean
    signatureBase64?: boolean
    signaturePassword?: boolean
    isBranch?: boolean
    parentCompanyRuc?: boolean
    establishmentCode?: boolean
    emissionPoint?: boolean
    establishmentAddress?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    ruc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sriSimulate?: boolean
    sriEnvironment?: boolean
    signatureBase64?: boolean
    signaturePassword?: boolean
    isBranch?: boolean
    parentCompanyRuc?: boolean
    establishmentCode?: boolean
    emissionPoint?: boolean
    establishmentAddress?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    ruc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sriSimulate?: boolean
    sriEnvironment?: boolean
    signatureBase64?: boolean
    signaturePassword?: boolean
    isBranch?: boolean
    parentCompanyRuc?: boolean
    establishmentCode?: boolean
    emissionPoint?: boolean
    establishmentAddress?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "ruc" | "createdAt" | "updatedAt" | "sriSimulate" | "sriEnvironment" | "signatureBase64" | "signaturePassword" | "isBranch" | "parentCompanyRuc" | "establishmentCode" | "emissionPoint" | "establishmentAddress", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | User$employeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      ruc: string
      createdAt: Date
      updatedAt: Date
      sriSimulate: boolean
      sriEnvironment: string
      signatureBase64: string | null
      signaturePassword: string | null
      isBranch: boolean
      parentCompanyRuc: string | null
      establishmentCode: string
      emissionPoint: string
      establishmentAddress: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends User$employeesArgs<ExtArgs> = {}>(args?: Subset<T, User$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly ruc: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly sriSimulate: FieldRef<"User", 'Boolean'>
    readonly sriEnvironment: FieldRef<"User", 'String'>
    readonly signatureBase64: FieldRef<"User", 'String'>
    readonly signaturePassword: FieldRef<"User", 'String'>
    readonly isBranch: FieldRef<"User", 'Boolean'>
    readonly parentCompanyRuc: FieldRef<"User", 'String'>
    readonly establishmentCode: FieldRef<"User", 'String'>
    readonly emissionPoint: FieldRef<"User", 'String'>
    readonly establishmentAddress: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employees
   */
  export type User$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    ownerId?: true
    createdAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    ownerId?: true
    createdAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    ownerId: string
    createdAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "ownerId" | "createdAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly ownerId: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
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


  export const BillingInvoiceScalarFieldEnum: {
    id: 'id',
    claveAcceso: 'claveAcceso',
    clientName: 'clientName',
    amount: 'amount',
    subtotal: 'subtotal',
    iva: 'iva',
    status: 'status',
    sentToClient: 'sentToClient',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type BillingInvoiceScalarFieldEnum = (typeof BillingInvoiceScalarFieldEnum)[keyof typeof BillingInvoiceScalarFieldEnum]


  export const BillingInvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type BillingInvoiceItemScalarFieldEnum = (typeof BillingInvoiceItemScalarFieldEnum)[keyof typeof BillingInvoiceItemScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    ruc: 'ruc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sriSimulate: 'sriSimulate',
    sriEnvironment: 'sriEnvironment',
    signatureBase64: 'signatureBase64',
    signaturePassword: 'signaturePassword',
    isBranch: 'isBranch',
    parentCompanyRuc: 'parentCompanyRuc',
    establishmentCode: 'establishmentCode',
    emissionPoint: 'emissionPoint',
    establishmentAddress: 'establishmentAddress'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BillingInvoiceWhereInput = {
    AND?: BillingInvoiceWhereInput | BillingInvoiceWhereInput[]
    OR?: BillingInvoiceWhereInput[]
    NOT?: BillingInvoiceWhereInput | BillingInvoiceWhereInput[]
    id?: StringFilter<"BillingInvoice"> | string
    claveAcceso?: StringFilter<"BillingInvoice"> | string
    clientName?: StringFilter<"BillingInvoice"> | string
    amount?: FloatFilter<"BillingInvoice"> | number
    subtotal?: FloatFilter<"BillingInvoice"> | number
    iva?: FloatFilter<"BillingInvoice"> | number
    status?: StringFilter<"BillingInvoice"> | string
    sentToClient?: BoolFilter<"BillingInvoice"> | boolean
    userId?: StringFilter<"BillingInvoice"> | string
    createdAt?: DateTimeFilter<"BillingInvoice"> | Date | string
    items?: BillingInvoiceItemListRelationFilter
  }

  export type BillingInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    claveAcceso?: SortOrder
    clientName?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    status?: SortOrder
    sentToClient?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    items?: BillingInvoiceItemOrderByRelationAggregateInput
  }

  export type BillingInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    claveAcceso?: string
    AND?: BillingInvoiceWhereInput | BillingInvoiceWhereInput[]
    OR?: BillingInvoiceWhereInput[]
    NOT?: BillingInvoiceWhereInput | BillingInvoiceWhereInput[]
    clientName?: StringFilter<"BillingInvoice"> | string
    amount?: FloatFilter<"BillingInvoice"> | number
    subtotal?: FloatFilter<"BillingInvoice"> | number
    iva?: FloatFilter<"BillingInvoice"> | number
    status?: StringFilter<"BillingInvoice"> | string
    sentToClient?: BoolFilter<"BillingInvoice"> | boolean
    userId?: StringFilter<"BillingInvoice"> | string
    createdAt?: DateTimeFilter<"BillingInvoice"> | Date | string
    items?: BillingInvoiceItemListRelationFilter
  }, "id" | "claveAcceso">

  export type BillingInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    claveAcceso?: SortOrder
    clientName?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    status?: SortOrder
    sentToClient?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: BillingInvoiceCountOrderByAggregateInput
    _avg?: BillingInvoiceAvgOrderByAggregateInput
    _max?: BillingInvoiceMaxOrderByAggregateInput
    _min?: BillingInvoiceMinOrderByAggregateInput
    _sum?: BillingInvoiceSumOrderByAggregateInput
  }

  export type BillingInvoiceScalarWhereWithAggregatesInput = {
    AND?: BillingInvoiceScalarWhereWithAggregatesInput | BillingInvoiceScalarWhereWithAggregatesInput[]
    OR?: BillingInvoiceScalarWhereWithAggregatesInput[]
    NOT?: BillingInvoiceScalarWhereWithAggregatesInput | BillingInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingInvoice"> | string
    claveAcceso?: StringWithAggregatesFilter<"BillingInvoice"> | string
    clientName?: StringWithAggregatesFilter<"BillingInvoice"> | string
    amount?: FloatWithAggregatesFilter<"BillingInvoice"> | number
    subtotal?: FloatWithAggregatesFilter<"BillingInvoice"> | number
    iva?: FloatWithAggregatesFilter<"BillingInvoice"> | number
    status?: StringWithAggregatesFilter<"BillingInvoice"> | string
    sentToClient?: BoolWithAggregatesFilter<"BillingInvoice"> | boolean
    userId?: StringWithAggregatesFilter<"BillingInvoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BillingInvoice"> | Date | string
  }

  export type BillingInvoiceItemWhereInput = {
    AND?: BillingInvoiceItemWhereInput | BillingInvoiceItemWhereInput[]
    OR?: BillingInvoiceItemWhereInput[]
    NOT?: BillingInvoiceItemWhereInput | BillingInvoiceItemWhereInput[]
    id?: StringFilter<"BillingInvoiceItem"> | string
    invoiceId?: StringFilter<"BillingInvoiceItem"> | string
    productId?: StringFilter<"BillingInvoiceItem"> | string
    quantity?: IntFilter<"BillingInvoiceItem"> | number
    invoice?: XOR<BillingInvoiceScalarRelationFilter, BillingInvoiceWhereInput>
  }

  export type BillingInvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    invoice?: BillingInvoiceOrderByWithRelationInput
  }

  export type BillingInvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillingInvoiceItemWhereInput | BillingInvoiceItemWhereInput[]
    OR?: BillingInvoiceItemWhereInput[]
    NOT?: BillingInvoiceItemWhereInput | BillingInvoiceItemWhereInput[]
    invoiceId?: StringFilter<"BillingInvoiceItem"> | string
    productId?: StringFilter<"BillingInvoiceItem"> | string
    quantity?: IntFilter<"BillingInvoiceItem"> | number
    invoice?: XOR<BillingInvoiceScalarRelationFilter, BillingInvoiceWhereInput>
  }, "id">

  export type BillingInvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    _count?: BillingInvoiceItemCountOrderByAggregateInput
    _avg?: BillingInvoiceItemAvgOrderByAggregateInput
    _max?: BillingInvoiceItemMaxOrderByAggregateInput
    _min?: BillingInvoiceItemMinOrderByAggregateInput
    _sum?: BillingInvoiceItemSumOrderByAggregateInput
  }

  export type BillingInvoiceItemScalarWhereWithAggregatesInput = {
    AND?: BillingInvoiceItemScalarWhereWithAggregatesInput | BillingInvoiceItemScalarWhereWithAggregatesInput[]
    OR?: BillingInvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: BillingInvoiceItemScalarWhereWithAggregatesInput | BillingInvoiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingInvoiceItem"> | string
    invoiceId?: StringWithAggregatesFilter<"BillingInvoiceItem"> | string
    productId?: StringWithAggregatesFilter<"BillingInvoiceItem"> | string
    quantity?: IntWithAggregatesFilter<"BillingInvoiceItem"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    ruc?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sriSimulate?: BoolFilter<"User"> | boolean
    sriEnvironment?: StringFilter<"User"> | string
    signatureBase64?: StringNullableFilter<"User"> | string | null
    signaturePassword?: StringNullableFilter<"User"> | string | null
    isBranch?: BoolFilter<"User"> | boolean
    parentCompanyRuc?: StringNullableFilter<"User"> | string | null
    establishmentCode?: StringFilter<"User"> | string
    emissionPoint?: StringFilter<"User"> | string
    establishmentAddress?: StringFilter<"User"> | string
    employees?: EmployeeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sriSimulate?: SortOrder
    sriEnvironment?: SortOrder
    signatureBase64?: SortOrderInput | SortOrder
    signaturePassword?: SortOrderInput | SortOrder
    isBranch?: SortOrder
    parentCompanyRuc?: SortOrderInput | SortOrder
    establishmentCode?: SortOrder
    emissionPoint?: SortOrder
    establishmentAddress?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    ruc?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sriSimulate?: BoolFilter<"User"> | boolean
    sriEnvironment?: StringFilter<"User"> | string
    signatureBase64?: StringNullableFilter<"User"> | string | null
    signaturePassword?: StringNullableFilter<"User"> | string | null
    isBranch?: BoolFilter<"User"> | boolean
    parentCompanyRuc?: StringNullableFilter<"User"> | string | null
    establishmentCode?: StringFilter<"User"> | string
    emissionPoint?: StringFilter<"User"> | string
    establishmentAddress?: StringFilter<"User"> | string
    employees?: EmployeeListRelationFilter
  }, "id" | "email" | "ruc">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sriSimulate?: SortOrder
    sriEnvironment?: SortOrder
    signatureBase64?: SortOrderInput | SortOrder
    signaturePassword?: SortOrderInput | SortOrder
    isBranch?: SortOrder
    parentCompanyRuc?: SortOrderInput | SortOrder
    establishmentCode?: SortOrder
    emissionPoint?: SortOrder
    establishmentAddress?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    ruc?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    sriSimulate?: BoolWithAggregatesFilter<"User"> | boolean
    sriEnvironment?: StringWithAggregatesFilter<"User"> | string
    signatureBase64?: StringNullableWithAggregatesFilter<"User"> | string | null
    signaturePassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    isBranch?: BoolWithAggregatesFilter<"User"> | boolean
    parentCompanyRuc?: StringNullableWithAggregatesFilter<"User"> | string | null
    establishmentCode?: StringWithAggregatesFilter<"User"> | string
    emissionPoint?: StringWithAggregatesFilter<"User"> | string
    establishmentAddress?: StringWithAggregatesFilter<"User"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    ownerId?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    ownerId?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    ownerId?: StringWithAggregatesFilter<"Employee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type BillingInvoiceCreateInput = {
    id?: string
    claveAcceso: string
    clientName: string
    amount: number
    subtotal: number
    iva: number
    status?: string
    sentToClient?: boolean
    userId: string
    createdAt?: Date | string
    items?: BillingInvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type BillingInvoiceUncheckedCreateInput = {
    id?: string
    claveAcceso: string
    clientName: string
    amount: number
    subtotal: number
    iva: number
    status?: string
    sentToClient?: boolean
    userId: string
    createdAt?: Date | string
    items?: BillingInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type BillingInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveAcceso?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    iva?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sentToClient?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BillingInvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type BillingInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveAcceso?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    iva?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sentToClient?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BillingInvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type BillingInvoiceCreateManyInput = {
    id?: string
    claveAcceso: string
    clientName: string
    amount: number
    subtotal: number
    iva: number
    status?: string
    sentToClient?: boolean
    userId: string
    createdAt?: Date | string
  }

  export type BillingInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveAcceso?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    iva?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sentToClient?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveAcceso?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    iva?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sentToClient?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingInvoiceItemCreateInput = {
    id?: string
    productId: string
    quantity: number
    invoice: BillingInvoiceCreateNestedOneWithoutItemsInput
  }

  export type BillingInvoiceItemUncheckedCreateInput = {
    id?: string
    invoiceId: string
    productId: string
    quantity: number
  }

  export type BillingInvoiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    invoice?: BillingInvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BillingInvoiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BillingInvoiceItemCreateManyInput = {
    id?: string
    invoiceId: string
    productId: string
    quantity: number
  }

  export type BillingInvoiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BillingInvoiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id: string
    email: string
    password: string
    name: string
    ruc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sriSimulate?: boolean
    sriEnvironment?: string
    signatureBase64?: string | null
    signaturePassword?: string | null
    isBranch?: boolean
    parentCompanyRuc?: string | null
    establishmentCode?: string
    emissionPoint?: string
    establishmentAddress?: string
    employees?: EmployeeCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    password: string
    name: string
    ruc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sriSimulate?: boolean
    sriEnvironment?: string
    signatureBase64?: string | null
    signaturePassword?: string | null
    isBranch?: boolean
    parentCompanyRuc?: string | null
    establishmentCode?: string
    emissionPoint?: string
    establishmentAddress?: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sriSimulate?: BoolFieldUpdateOperationsInput | boolean
    sriEnvironment?: StringFieldUpdateOperationsInput | string
    signatureBase64?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePassword?: NullableStringFieldUpdateOperationsInput | string | null
    isBranch?: BoolFieldUpdateOperationsInput | boolean
    parentCompanyRuc?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentCode?: StringFieldUpdateOperationsInput | string
    emissionPoint?: StringFieldUpdateOperationsInput | string
    establishmentAddress?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sriSimulate?: BoolFieldUpdateOperationsInput | boolean
    sriEnvironment?: StringFieldUpdateOperationsInput | string
    signatureBase64?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePassword?: NullableStringFieldUpdateOperationsInput | string | null
    isBranch?: BoolFieldUpdateOperationsInput | boolean
    parentCompanyRuc?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentCode?: StringFieldUpdateOperationsInput | string
    emissionPoint?: StringFieldUpdateOperationsInput | string
    establishmentAddress?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    password: string
    name: string
    ruc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sriSimulate?: boolean
    sriEnvironment?: string
    signatureBase64?: string | null
    signaturePassword?: string | null
    isBranch?: boolean
    parentCompanyRuc?: string | null
    establishmentCode?: string
    emissionPoint?: string
    establishmentAddress?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sriSimulate?: BoolFieldUpdateOperationsInput | boolean
    sriEnvironment?: StringFieldUpdateOperationsInput | string
    signatureBase64?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePassword?: NullableStringFieldUpdateOperationsInput | string | null
    isBranch?: BoolFieldUpdateOperationsInput | boolean
    parentCompanyRuc?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentCode?: StringFieldUpdateOperationsInput | string
    emissionPoint?: StringFieldUpdateOperationsInput | string
    establishmentAddress?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sriSimulate?: BoolFieldUpdateOperationsInput | boolean
    sriEnvironment?: StringFieldUpdateOperationsInput | string
    signatureBase64?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePassword?: NullableStringFieldUpdateOperationsInput | string | null
    isBranch?: BoolFieldUpdateOperationsInput | boolean
    parentCompanyRuc?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentCode?: StringFieldUpdateOperationsInput | string
    emissionPoint?: StringFieldUpdateOperationsInput | string
    establishmentAddress?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    ownerId: string
    createdAt?: Date | string
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
    ownerId: string
    createdAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BillingInvoiceItemListRelationFilter = {
    every?: BillingInvoiceItemWhereInput
    some?: BillingInvoiceItemWhereInput
    none?: BillingInvoiceItemWhereInput
  }

  export type BillingInvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    claveAcceso?: SortOrder
    clientName?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    status?: SortOrder
    sentToClient?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingInvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
  }

  export type BillingInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    claveAcceso?: SortOrder
    clientName?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    status?: SortOrder
    sentToClient?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    claveAcceso?: SortOrder
    clientName?: SortOrder
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    status?: SortOrder
    sentToClient?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingInvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BillingInvoiceScalarRelationFilter = {
    is?: BillingInvoiceWhereInput
    isNot?: BillingInvoiceWhereInput
  }

  export type BillingInvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type BillingInvoiceItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BillingInvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type BillingInvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type BillingInvoiceItemSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sriSimulate?: SortOrder
    sriEnvironment?: SortOrder
    signatureBase64?: SortOrder
    signaturePassword?: SortOrder
    isBranch?: SortOrder
    parentCompanyRuc?: SortOrder
    establishmentCode?: SortOrder
    emissionPoint?: SortOrder
    establishmentAddress?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sriSimulate?: SortOrder
    sriEnvironment?: SortOrder
    signatureBase64?: SortOrder
    signaturePassword?: SortOrder
    isBranch?: SortOrder
    parentCompanyRuc?: SortOrder
    establishmentCode?: SortOrder
    emissionPoint?: SortOrder
    establishmentAddress?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sriSimulate?: SortOrder
    sriEnvironment?: SortOrder
    signatureBase64?: SortOrder
    signaturePassword?: SortOrder
    isBranch?: SortOrder
    parentCompanyRuc?: SortOrder
    establishmentCode?: SortOrder
    emissionPoint?: SortOrder
    establishmentAddress?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingInvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<BillingInvoiceItemCreateWithoutInvoiceInput, BillingInvoiceItemUncheckedCreateWithoutInvoiceInput> | BillingInvoiceItemCreateWithoutInvoiceInput[] | BillingInvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: BillingInvoiceItemCreateOrConnectWithoutInvoiceInput | BillingInvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: BillingInvoiceItemCreateManyInvoiceInputEnvelope
    connect?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
  }

  export type BillingInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<BillingInvoiceItemCreateWithoutInvoiceInput, BillingInvoiceItemUncheckedCreateWithoutInvoiceInput> | BillingInvoiceItemCreateWithoutInvoiceInput[] | BillingInvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: BillingInvoiceItemCreateOrConnectWithoutInvoiceInput | BillingInvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: BillingInvoiceItemCreateManyInvoiceInputEnvelope
    connect?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BillingInvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<BillingInvoiceItemCreateWithoutInvoiceInput, BillingInvoiceItemUncheckedCreateWithoutInvoiceInput> | BillingInvoiceItemCreateWithoutInvoiceInput[] | BillingInvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: BillingInvoiceItemCreateOrConnectWithoutInvoiceInput | BillingInvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: BillingInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | BillingInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: BillingInvoiceItemCreateManyInvoiceInputEnvelope
    set?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    disconnect?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    delete?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    connect?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    update?: BillingInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | BillingInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: BillingInvoiceItemUpdateManyWithWhereWithoutInvoiceInput | BillingInvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: BillingInvoiceItemScalarWhereInput | BillingInvoiceItemScalarWhereInput[]
  }

  export type BillingInvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<BillingInvoiceItemCreateWithoutInvoiceInput, BillingInvoiceItemUncheckedCreateWithoutInvoiceInput> | BillingInvoiceItemCreateWithoutInvoiceInput[] | BillingInvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: BillingInvoiceItemCreateOrConnectWithoutInvoiceInput | BillingInvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: BillingInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | BillingInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: BillingInvoiceItemCreateManyInvoiceInputEnvelope
    set?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    disconnect?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    delete?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    connect?: BillingInvoiceItemWhereUniqueInput | BillingInvoiceItemWhereUniqueInput[]
    update?: BillingInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | BillingInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: BillingInvoiceItemUpdateManyWithWhereWithoutInvoiceInput | BillingInvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: BillingInvoiceItemScalarWhereInput | BillingInvoiceItemScalarWhereInput[]
  }

  export type BillingInvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<BillingInvoiceCreateWithoutItemsInput, BillingInvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BillingInvoiceCreateOrConnectWithoutItemsInput
    connect?: BillingInvoiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BillingInvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<BillingInvoiceCreateWithoutItemsInput, BillingInvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BillingInvoiceCreateOrConnectWithoutItemsInput
    upsert?: BillingInvoiceUpsertWithoutItemsInput
    connect?: BillingInvoiceWhereUniqueInput
    update?: XOR<XOR<BillingInvoiceUpdateToOneWithWhereWithoutItemsInput, BillingInvoiceUpdateWithoutItemsInput>, BillingInvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type EmployeeCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EmployeeCreateWithoutOwnerInput, EmployeeUncheckedCreateWithoutOwnerInput> | EmployeeCreateWithoutOwnerInput[] | EmployeeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOwnerInput | EmployeeCreateOrConnectWithoutOwnerInput[]
    createMany?: EmployeeCreateManyOwnerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EmployeeCreateWithoutOwnerInput, EmployeeUncheckedCreateWithoutOwnerInput> | EmployeeCreateWithoutOwnerInput[] | EmployeeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOwnerInput | EmployeeCreateOrConnectWithoutOwnerInput[]
    createMany?: EmployeeCreateManyOwnerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeeUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EmployeeCreateWithoutOwnerInput, EmployeeUncheckedCreateWithoutOwnerInput> | EmployeeCreateWithoutOwnerInput[] | EmployeeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOwnerInput | EmployeeCreateOrConnectWithoutOwnerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOwnerInput | EmployeeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EmployeeCreateManyOwnerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOwnerInput | EmployeeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOwnerInput | EmployeeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EmployeeCreateWithoutOwnerInput, EmployeeUncheckedCreateWithoutOwnerInput> | EmployeeCreateWithoutOwnerInput[] | EmployeeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOwnerInput | EmployeeCreateOrConnectWithoutOwnerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOwnerInput | EmployeeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EmployeeCreateManyOwnerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOwnerInput | EmployeeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOwnerInput | EmployeeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeesInput, UserUpdateWithoutEmployeesInput>, UserUncheckedUpdateWithoutEmployeesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BillingInvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    productId: string
    quantity: number
  }

  export type BillingInvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    productId: string
    quantity: number
  }

  export type BillingInvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: BillingInvoiceItemWhereUniqueInput
    create: XOR<BillingInvoiceItemCreateWithoutInvoiceInput, BillingInvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type BillingInvoiceItemCreateManyInvoiceInputEnvelope = {
    data: BillingInvoiceItemCreateManyInvoiceInput | BillingInvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type BillingInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: BillingInvoiceItemWhereUniqueInput
    update: XOR<BillingInvoiceItemUpdateWithoutInvoiceInput, BillingInvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<BillingInvoiceItemCreateWithoutInvoiceInput, BillingInvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type BillingInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: BillingInvoiceItemWhereUniqueInput
    data: XOR<BillingInvoiceItemUpdateWithoutInvoiceInput, BillingInvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type BillingInvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: BillingInvoiceItemScalarWhereInput
    data: XOR<BillingInvoiceItemUpdateManyMutationInput, BillingInvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type BillingInvoiceItemScalarWhereInput = {
    AND?: BillingInvoiceItemScalarWhereInput | BillingInvoiceItemScalarWhereInput[]
    OR?: BillingInvoiceItemScalarWhereInput[]
    NOT?: BillingInvoiceItemScalarWhereInput | BillingInvoiceItemScalarWhereInput[]
    id?: StringFilter<"BillingInvoiceItem"> | string
    invoiceId?: StringFilter<"BillingInvoiceItem"> | string
    productId?: StringFilter<"BillingInvoiceItem"> | string
    quantity?: IntFilter<"BillingInvoiceItem"> | number
  }

  export type BillingInvoiceCreateWithoutItemsInput = {
    id?: string
    claveAcceso: string
    clientName: string
    amount: number
    subtotal: number
    iva: number
    status?: string
    sentToClient?: boolean
    userId: string
    createdAt?: Date | string
  }

  export type BillingInvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    claveAcceso: string
    clientName: string
    amount: number
    subtotal: number
    iva: number
    status?: string
    sentToClient?: boolean
    userId: string
    createdAt?: Date | string
  }

  export type BillingInvoiceCreateOrConnectWithoutItemsInput = {
    where: BillingInvoiceWhereUniqueInput
    create: XOR<BillingInvoiceCreateWithoutItemsInput, BillingInvoiceUncheckedCreateWithoutItemsInput>
  }

  export type BillingInvoiceUpsertWithoutItemsInput = {
    update: XOR<BillingInvoiceUpdateWithoutItemsInput, BillingInvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<BillingInvoiceCreateWithoutItemsInput, BillingInvoiceUncheckedCreateWithoutItemsInput>
    where?: BillingInvoiceWhereInput
  }

  export type BillingInvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: BillingInvoiceWhereInput
    data: XOR<BillingInvoiceUpdateWithoutItemsInput, BillingInvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type BillingInvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveAcceso?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    iva?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sentToClient?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingInvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveAcceso?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    iva?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sentToClient?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateWithoutOwnerInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutOwnerInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutOwnerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOwnerInput, EmployeeUncheckedCreateWithoutOwnerInput>
  }

  export type EmployeeCreateManyOwnerInputEnvelope = {
    data: EmployeeCreateManyOwnerInput | EmployeeCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOwnerInput, EmployeeUncheckedUpdateWithoutOwnerInput>
    create: XOR<EmployeeCreateWithoutOwnerInput, EmployeeUncheckedCreateWithoutOwnerInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOwnerInput, EmployeeUncheckedUpdateWithoutOwnerInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOwnerInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    ownerId?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type UserCreateWithoutEmployeesInput = {
    id: string
    email: string
    password: string
    name: string
    ruc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sriSimulate?: boolean
    sriEnvironment?: string
    signatureBase64?: string | null
    signaturePassword?: string | null
    isBranch?: boolean
    parentCompanyRuc?: string | null
    establishmentCode?: string
    emissionPoint?: string
    establishmentAddress?: string
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id: string
    email: string
    password: string
    name: string
    ruc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sriSimulate?: boolean
    sriEnvironment?: string
    signatureBase64?: string | null
    signaturePassword?: string | null
    isBranch?: boolean
    parentCompanyRuc?: string | null
    establishmentCode?: string
    emissionPoint?: string
    establishmentAddress?: string
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sriSimulate?: BoolFieldUpdateOperationsInput | boolean
    sriEnvironment?: StringFieldUpdateOperationsInput | string
    signatureBase64?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePassword?: NullableStringFieldUpdateOperationsInput | string | null
    isBranch?: BoolFieldUpdateOperationsInput | boolean
    parentCompanyRuc?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentCode?: StringFieldUpdateOperationsInput | string
    emissionPoint?: StringFieldUpdateOperationsInput | string
    establishmentAddress?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sriSimulate?: BoolFieldUpdateOperationsInput | boolean
    sriEnvironment?: StringFieldUpdateOperationsInput | string
    signatureBase64?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePassword?: NullableStringFieldUpdateOperationsInput | string | null
    isBranch?: BoolFieldUpdateOperationsInput | boolean
    parentCompanyRuc?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentCode?: StringFieldUpdateOperationsInput | string
    emissionPoint?: StringFieldUpdateOperationsInput | string
    establishmentAddress?: StringFieldUpdateOperationsInput | string
  }

  export type BillingInvoiceItemCreateManyInvoiceInput = {
    id?: string
    productId: string
    quantity: number
  }

  export type BillingInvoiceItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BillingInvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BillingInvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyOwnerInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type EmployeeUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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