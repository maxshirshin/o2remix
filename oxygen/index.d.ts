declare class AbortController {
  constructor();
  readonly signal: AbortSignal;
  abort(reason?: any): void;
}

declare class AbortSignal extends EventTarget {
  constructor();
  static abort(reason?: any): AbortSignal;
  static timeout(delay: number): AbortSignal;
  readonly aborted: boolean;
  readonly reason: any;
  throwIfAborted(): void;
}

declare class Blob {
  constructor(bits?: BlobBits, options?: BlobOptions);
  readonly size: number;
  readonly type: string;
  slice(start?: number, end?: number, type?: string): Blob;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  stream(): ReadableStream;
}

declare type BlobBits = (ArrayBuffer | string | Blob)[];

interface BlobOptions {
  type?: string;
}

declare abstract class Body {
  readonly body: ReadableStream | null;
  readonly bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  formData(): Promise<FormData>;
  blob(): Promise<Blob>;
}

declare type BodyInit =
  | ReadableStream
  | string
  | ArrayBuffer
  | Blob
  | URLSearchParams
  | FormData;

/**
 * Back compat for code migrating to older definitions.
 * @deprecated Use BodyInit instead.
 */
declare type BodyInitializer = BodyInit;

declare class ByteLengthQueuingStrategy {
  constructor(init: QueuingStrategyInit);
  readonly highWaterMark: number;
  size(chunk?: any): number;
}

declare abstract class Cache {
  delete(
    request: Request | string,
    options?: CacheQueryOptions
  ): Promise<boolean>;
  match(
    request: Request | string,
    options?: CacheQueryOptions
  ): Promise<Response | undefined>;
  put(request: Request | string, response: Response): Promise<void>;
}

interface CacheQueryOptions {
  ignoreMethod?: boolean;
}

declare abstract class CacheStorage {
  open(cacheName: string): Promise<Cache>;
}

declare class CloseEvent extends Event {
  constructor(type: string, initializer: CloseEventInit);
  readonly code: number;
  readonly reason: string;
  readonly wasClean: boolean;
}

interface CloseEventInit {
  code?: number;
  reason?: string;
  wasClean?: boolean;
}

interface Comment {
  text: string;
  readonly removed: boolean;
  before(content: Content, options?: ContentOptions): Comment;
  after(content: Content, options?: ContentOptions): Comment;
  replace(content: Content, options?: ContentOptions): Comment;
  remove(): Comment;
}

declare class CompressionStream extends TransformStream {
  constructor(format: "gzip" | "deflate");
}

interface Console {
  debug(...data: any[]): void;
  error(...data: any[]): void;
  info(...data: any[]): void;
  log(...data: any[]): void;
  warn(...data: any[]): void;
}

declare type Content = string | ReadableStream | Response;

interface ContentOptions {
  html?: boolean;
}

declare class CountQueuingStrategy {
  constructor(init: QueuingStrategyInit);
  readonly highWaterMark: number;
  size(chunk?: any): number;
}

declare abstract class Crypto {
  readonly subtle: SubtleCrypto;
  getRandomValues<
    T extends
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array
      | BigInt64Array
      | BigUint64Array
  >(buffer: T): T;
  randomUUID(): string;
  DigestStream: typeof DigestStream;
}

declare abstract class CryptoKey {
  readonly type: string;
  readonly extractable: boolean;
  readonly algorithm: CryptoKeyAlgorithmVariant;
  readonly usages: string[];
}

interface CryptoKeyAesKeyAlgorithm {
  name: string;
  length: number;
}

declare type CryptoKeyAlgorithmVariant =
  | CryptoKeyKeyAlgorithm
  | CryptoKeyAesKeyAlgorithm
  | CryptoKeyHmacKeyAlgorithm
  | CryptoKeyRsaKeyAlgorithm
  | CryptoKeyEllipticKeyAlgorithm
  | CryptoKeyVoprfKeyAlgorithm
  | CryptoKeyOprfKeyAlgorithm;

interface CryptoKeyEllipticKeyAlgorithm {
  name: string;
  namedCurve: string;
}

interface CryptoKeyHmacKeyAlgorithm {
  name: string;
  hash: CryptoKeyKeyAlgorithm;
  length: number;
}

interface CryptoKeyKeyAlgorithm {
  name: string;
}

interface CryptoKeyOprfKeyAlgorithm {
  name: string;
  namedCurve: string;
}

interface CryptoKeyPair {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
}

interface CryptoKeyRsaKeyAlgorithm {
  name: string;
  modulusLength: number;
  publicExponent: ArrayBuffer;
  hash?: CryptoKeyKeyAlgorithm;
}

interface CryptoKeyVoprfKeyAlgorithm {
  name: string;
  hash: CryptoKeyKeyAlgorithm;
  namedCurve: string;
}

declare class DOMException extends Error {
  constructor(message?: string, name?: string);
  readonly code: number;
  static readonly INDEX_SIZE_ERR: number;
  static readonly DOMSTRING_SIZE_ERR: number;
  static readonly HIERARCHY_REQUEST_ERR: number;
  static readonly WRONG_DOCUMENT_ERR: number;
  static readonly INVALID_CHARACTER_ERR: number;
  static readonly NO_DATA_ALLOWED_ERR: number;
  static readonly NO_MODIFICATION_ALLOWED_ERR: number;
  static readonly NOT_FOUND_ERR: number;
  static readonly NOT_SUPPORTED_ERR: number;
  static readonly INUSE_ATTRIBUTE_ERR: number;
  static readonly INVALID_STATE_ERR: number;
  static readonly SYNTAX_ERR: number;
  static readonly INVALID_MODIFICATION_ERR: number;
  static readonly NAMESPACE_ERR: number;
  static readonly INVALID_ACCESS_ERR: number;
  static readonly VALIDATION_ERR: number;
  static readonly TYPE_MISMATCH_ERR: number;
  static readonly SECURITY_ERR: number;
  static readonly NETWORK_ERR: number;
  static readonly ABORT_ERR: number;
  static readonly URL_MISMATCH_ERR: number;
  static readonly QUOTA_EXCEEDED_ERR: number;
  static readonly TIMEOUT_ERR: number;
  static readonly INVALID_NODE_TYPE_ERR: number;
  static readonly DATA_CLONE_ERR: number;
}

declare class DecompressionStream extends TransformStream {
  constructor(format: "gzip" | "deflate");
}

declare class DigestStream extends WritableStream {
  constructor(algorithm: string | SubtleCryptoHashAlgorithm);
  readonly digest: Promise<ArrayBuffer>;
}

interface Doctype {
  readonly name: string | null;
  readonly publicId: string | null;
  readonly systemId: string | null;
}

interface DocumentEnd {
  append(content: Content, options?: ContentOptions): DocumentEnd;
}

interface Element {
  tagName: string;
  readonly attributes: IterableIterator<string[]>;
  readonly removed: boolean;
  readonly namespaceURI: string;
  getAttribute(name: string): string | null;
  hasAttribute(name: string): boolean;
  setAttribute(name: string, value: string): Element;
  removeAttribute(name: string): Element;
  before(content: Content, options?: ContentOptions): Element;
  after(content: Content, options?: ContentOptions): Element;
  prepend(content: Content, options?: ContentOptions): Element;
  append(content: Content, options?: ContentOptions): Element;
  replace(content: Content, options?: ContentOptions): Element;
  remove(): Element;
  removeAndKeepContent(): Element;
  setInnerContent(content: Content, options?: ContentOptions): Element;
  onEndTag(handler: (tag: EndTag) => void | Promise<void>): void;
}

interface EndTag {
  name: string;
  before(content: Content, options?: ContentOptions): EndTag;
  after(content: Content, options?: ContentOptions): EndTag;
  remove(): EndTag;
}

interface ErrorEvent extends Event {
  readonly filename: string;
  readonly message: string;
  readonly lineno: number;
  readonly colno: number;
  readonly error: any;
}

declare class Event {
  constructor(type: string, init?: EventInit);
  readonly type: string;
  readonly eventPhase: number;
  readonly composed: boolean;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly defaultPrevented: boolean;
  readonly returnValue: boolean;
  readonly currentTarget?: EventTarget;
  readonly srcElement?: EventTarget;
  readonly timeStamp: number;
  readonly isTrusted: boolean;
  cancelBubble: boolean;
  stopImmediatePropagation(): void;
  preventDefault(): void;
  stopPropagation(): void;
  composedPath(): EventTarget[];
  static readonly NONE: number;
  static readonly CAPTURING_PHASE: number;
  static readonly AT_TARGET: number;
  static readonly BUBBLING_PHASE: number;
}

interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

declare type EventListener<EventType extends Event = Event> = (
  event: EventType
) => void;

interface EventListenerObject<EventType extends Event = Event> {
  handleEvent(event: EventType): void;
}

declare type EventListenerOrEventListenerObject<
  EventType extends Event = Event
> = EventListener<EventType> | EventListenerObject<EventType>;

declare class EventTarget<
  EventMap extends Record<string, Event> = Record<string, Event>
> {
  constructor();
  addEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetAddEventListenerOptions | boolean
  ): void;
  removeEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetEventListenerOptions | boolean
  ): void;
  dispatchEvent(event: EventMap[keyof EventMap]): boolean;
}

interface EventTargetAddEventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
  signal?: AbortSignal;
}

interface EventTargetEventListenerOptions {
  capture?: boolean;
}

interface EventTargetHandlerObject {
  handleEvent(arg1: Event): any | undefined;
}

interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}

interface ExportedHandler<Env = unknown> {
  fetch?: ExportedHandlerFetchHandler<Env>;
  scheduled?: ExportedHandlerScheduledHandler<Env>;
}

declare type ExportedHandlerFetchHandler<Env = unknown> = (
  request: Request,
  env: Env,
  ctx: ExecutionContext
) => Response | Promise<Response>;

declare type ExportedHandlerScheduledHandler<Env = unknown> = (
  controller: ScheduledController,
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;

declare class ExtendableEvent extends Event {
  constructor(type: string, init?: EventInit);
  waitUntil(promise: Promise<any>): void;
}

declare abstract class FetchEvent extends ExtendableEvent {
  readonly request: Request;
  respondWith(promise: Response | Promise<Response>): void;
  passThroughOnException(): void;
}

declare abstract class Fetcher {
  fetch(
    requestOrUrl: Request | string,
    requestInit?: RequestInit | Request
  ): Promise<Response>;
}

declare class File extends Blob {
  constructor(bits?: BlobBits, name?: string, options?: FileOptions);
  readonly name: string;
  readonly lastModified: number;
}

interface FileOptions {
  type?: string;
  lastModified?: number;
}

declare class FixedLengthStream extends IdentityTransformStream {
  constructor(expectedLength: number | bigint);
}

declare class FormData {
  constructor();
  append(name: string, value: string): void;
  append(name: string, value: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): File | string | null;
  getAll(name: string): (File | string)[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, value: Blob, filename?: string): void;
  entries(): IterableIterator<[key: string, value: File | string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string | File>;
  forEach<This = unknown>(
    callback: (
      this: This,
      key: string,
      value: File | string,
      parent: FormData
    ) => void,
    thisArg?: This
  ): void;
  [Symbol.iterator](): IterableIterator<[key: string, value: File | string]>;
}

declare class Headers {
  constructor(init?: HeadersInit);
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  append(name: string, value: string): void;
  delete(name: string): void;
  forEach<This = unknown>(
    callback: (this: This, key: string, value: string, parent: Headers) => void,
    thisArg?: This
  ): void;
  entries(): IterableIterator<[key: string, value: string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
}

declare type HeadersInit =
  | Headers
  | Record<string, string>
  | [key: string, value: string][];

declare class IdentityTransformStream extends TransformStream {
  constructor();
}

interface JsonWebKey {
  kty: string;
  use?: string;
  key_ops?: string[];
  alg?: string;
  ext?: boolean;
  crv?: string;
  x?: string;
  y?: string;
  d?: string;
  n?: string;
  e?: string;
  p?: string;
  q?: string;
  dp?: string;
  dq?: string;
  qi?: string;
  oth?: RsaOtherPrimesInfo[];
  k?: string;
}

declare class MessageEvent extends Event {
  constructor(type: string, initializer: MessageEventInit);
  readonly data: ArrayBuffer | string;
}

interface MessageEventInit {
  data: ArrayBuffer | string;
}

declare abstract class Navigator {
  readonly userAgent: string;
}

/**
 * Transitionary name.
 * @deprecated Use StreamPipeOptions
 */
interface PipeToOptions {
  preventClose?: boolean;
  preventAbort?: boolean;
  preventCancel?: boolean;
  signal?: AbortSignal;
}

declare abstract class PromiseRejectionEvent extends Event {
  readonly promise: Promise<any>;
  readonly reason: any;
}

interface QueuingStrategyInit {
  highWaterMark: number;
}

interface ReadResult {
  value?: any;
  done: boolean;
}

declare abstract class ReadableByteStreamController {
  readonly byobRequest: ReadableStreamBYOBRequest | null;
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: ArrayBuffer | ArrayBufferView): void;
  error(reason: any): void;
}

declare class ReadableStream {
  constructor(
    underlyingSource?: UnderlyingSource,
    queuingStrategy?: StreamQueuingStrategy
  );
  readonly locked: boolean;
  cancel(reason?: any): Promise<void>;
  getReader(options: ReadableStreamGetReaderOptions): ReadableStreamBYOBReader;
  getReader(): ReadableStreamDefaultReader;
  pipeThrough(
    transform: ReadableStreamTransform,
    options?: PipeToOptions
  ): ReadableStream;
  pipeTo(destination: WritableStream, options?: PipeToOptions): Promise<void>;
  tee(): [ReadableStream, ReadableStream];
  values(options?: ReadableStreamValuesOptions): AsyncIterableIterator<any>;
  [Symbol.asyncIterator](
    options?: ReadableStreamValuesOptions
  ): AsyncIterableIterator<any>;
}

declare class ReadableStreamBYOBReader {
  constructor(stream: ReadableStream);
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read<T extends ArrayBufferView>(
    view: T
  ): Promise<ReadableStreamReadResult<T>>;
  releaseLock(): void;
  readAtLeast(
    minBytes: number,
    view: Uint8Array
  ): Promise<ReadableStreamReadResult<Uint8Array>>;
}

declare abstract class ReadableStreamBYOBRequest {
  readonly view: Uint8Array | null;
  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBuffer | ArrayBufferView): void;
  readonly atLeast: number | null;
}

declare abstract class ReadableStreamDefaultController {
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk?: any): void;
  error(reason: any): void;
}

declare class ReadableStreamDefaultReader {
  constructor(stream: ReadableStream);
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read(): Promise<ReadableStreamReadResult<any>>;
  releaseLock(): void;
}

interface ReadableStreamGetReaderOptions {
  mode: string;
}

/**
 * Back-compat alias.
 * @deprecated Use StreamPipeOptions
 */
declare type ReadableStreamPipeToOptions = PipeToOptions;

declare type ReadableStreamReadResult<T = any> =
  | { done: true; value: undefined }
  | { done: false; value: T };

interface ReadableStreamTransform {
  writable: WritableStream;
  readable: ReadableStream;
}

interface ReadableStreamValuesOptions {
  preventCancel?: boolean;
}

declare class Request extends Body {
  constructor(input: Request | string, init?: RequestInit | Request);
  clone(): Request;
  readonly method: string;
  readonly url: string;
  readonly headers: Headers;
  readonly redirect: string;
  readonly fetcher: Fetcher | null;
  readonly signal: AbortSignal;
}

interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  redirect?: string;
  fetcher?: Fetcher | null;
  signal?: AbortSignal | null;
}

declare class Response extends Body {
  constructor(bodyInit?: BodyInit | null, maybeInit?: ResponseInit | Response);
  static redirect(url: string, status?: number): Response;
  static json(any: any, maybeInit?: ResponseInit | Response): Response;
  clone(): Response;
  readonly status: number;
  readonly statusText: string;
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly url: string;
}

interface ResponseInit {
  status?: number;
  statusText?: string;
  headers?: HeadersInit;
  encodeBody?: string;
}

interface RsaOtherPrimesInfo {
  r?: string;
  d?: string;
  t?: string;
}

interface ScheduledController {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}

declare abstract class ScheduledEvent extends ExtendableEvent {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}

interface Scheduler {
  wait(delay: number, maybeOptions?: SchedulerWaitOptions): Promise<void>;
}

interface SchedulerWaitOptions {
  signal?: AbortSignal;
}

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  btoa(data: string): string;
  atob(data: string): string;
  setTimeout<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearTimeout(timeoutId: number | null): void;
  setInterval<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearInterval(timeoutId: number | null): void;
  queueMicrotask(task: Function): void;
  structuredClone(
    value: any,
    options?: ServiceWorkerGlobalScopeStructuredCloneOptions
  ): any;
  fetch(
    request: Request | string,
    requestInitr?: RequestInit | Request
  ): Promise<Response>;
  self: ServiceWorkerGlobalScope;
  crypto: Crypto;
  caches: CacheStorage;
  scheduler: Scheduler;
  navigator: Navigator;
  readonly console: Console;
  origin: void;
}

interface ServiceWorkerGlobalScopeStructuredCloneOptions {
  transfer?: any[];
}

declare type StreamPipeOptions = PipeToOptions;

interface StreamQueuingStrategy {
  highWaterMark?: number;
  size(chunk: any): number;
}

declare abstract class SubtleCrypto {
  encrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    plainText: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  decrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    cipherText: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  sign(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  verify(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    signature: ArrayBuffer | ArrayBufferView,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<boolean>;
  digest(
    algorithm: string | SubtleCryptoHashAlgorithm,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  generateKey(
    algorithm: string | SubtleCryptoGenerateKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey | CryptoKeyPair>;
  deriveKey(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    derivedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  deriveBits(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    length: number | null
  ): Promise<ArrayBuffer>;
  importKey(
    format: string,
    keyData: ArrayBuffer | JsonWebKey,
    algorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  exportKey(format: string, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
  wrapKey(
    format: string,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: string | SubtleCryptoEncryptAlgorithm
  ): Promise<ArrayBuffer>;
  unwrapKey(
    format: string,
    wrappedKey: ArrayBuffer | ArrayBufferView,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: string | SubtleCryptoEncryptAlgorithm,
    unwrappedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  timingSafeEqual(
    a: ArrayBuffer | ArrayBufferView,
    b: ArrayBuffer | ArrayBufferView
  ): boolean;
}

interface SubtleCryptoDeriveKeyAlgorithm {
  name: string;
  salt?: ArrayBuffer;
  iterations?: number;
  hash?: string | SubtleCryptoHashAlgorithm;
  public?: CryptoKey;
  info?: ArrayBuffer;
}

interface SubtleCryptoEncryptAlgorithm {
  name: string;
  iv?: ArrayBuffer;
  additionalData?: ArrayBuffer;
  tagLength?: number;
  counter?: ArrayBuffer;
  length?: number;
  label?: ArrayBuffer;
}

interface SubtleCryptoGenerateKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  modulusLength?: number;
  publicExponent?: ArrayBuffer;
  length?: number;
  namedCurve?: string;
}

interface SubtleCryptoHashAlgorithm {
  name: string;
}

interface SubtleCryptoImportKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  length?: number;
  namedCurve?: string;
  compressed?: boolean;
}

interface SubtleCryptoSignAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  dataLength?: number;
  saltLength?: number;
}

interface Text {
  readonly text: string;
  readonly lastInTextNode: boolean;
  readonly removed: boolean;
  before(content: Content, options?: ContentOptions): Text;
  after(content: Content, options?: ContentOptions): Text;
  replace(content: Content, options?: ContentOptions): Text;
  remove(): Text;
}

declare class TextDecoder {
  constructor(
    label?: "utf-8" | "utf8" | "unicode-1-1-utf-8",
    options?: TextDecoderConstructorOptions
  );
  decode(
    input?: ArrayBuffer | ArrayBufferView,
    options?: TextDecoderDecodeOptions
  ): string;
  readonly encoding: string;
  readonly fatal: boolean;
  readonly ignoreBOM: boolean;
}

interface TextDecoderConstructorOptions {
  fatal: boolean;
  ignoreBOM: boolean;
}

interface TextDecoderDecodeOptions {
  stream: boolean;
}

declare class TextDecoderStream extends TransformStream {
  constructor(label?: string, options?: TextDecoderStreamTextDecoderStreamInit);
}

interface TextDecoderStreamTextDecoderStreamInit {
  fatal?: boolean;
}

declare class TextEncoder {
  constructor();
  encode(input?: string): Uint8Array;
  encodeInto(input: string, buffer: Uint8Array): TextEncoderEncodeIntoResult;
  readonly encoding: string;
}

interface TextEncoderEncodeIntoResult {
  read: number;
  written: number;
}

declare class TextEncoderStream extends TransformStream {
  constructor();
}

declare class TransformStream {
  constructor(
    maybeTransformer?: Transformer,
    maybeWritableStrategy?: StreamQueuingStrategy,
    maybeReadableStrategy?: StreamQueuingStrategy
  );
  readonly readable: ReadableStream;
  readonly writable: WritableStream;
}

interface TransformStreamDefaultController {
  readonly desiredSize: number | null;
  enqueue(chunk: any): void;
  error(reason: any): void;
  terminate(): void;
}

interface Transformer {
  readableType?: string;
  writableType?: string;
  start?(controller: TransformStreamDefaultController): any;
  transform?(chunk: any, controller: TransformStreamDefaultController): any;
  flush?(controller: TransformStreamDefaultController): any;
}

declare class URL {
  constructor(url: string, base?: string);
  href: string;
  readonly origin: string;
  protocol: string;
  username: string;
  password: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  readonly searchParams: URLSearchParams;
  hash: string;
  toString(): string;
  toJSON(): string;
}

declare class URLPattern {
  constructor(input?: string | URLPatternURLPatternInit, baseURL?: string);
  readonly protocol: string;
  readonly username: string;
  readonly password: string;
  readonly hostname: string;
  readonly port: string;
  readonly pathname: string;
  readonly search: string;
  readonly hash: string;
  test(input?: string | URLPatternURLPatternInit, baseURL?: string): boolean;
  exec(
    input?: string | URLPatternURLPatternInit,
    baseURL?: string
  ): URLPatternURLPatternResult | null;
}

interface URLPatternURLPatternComponentResult {
  input: string;
  groups: Record<string, string>;
}

interface URLPatternURLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

interface URLPatternURLPatternResult {
  inputs: (string | URLPatternURLPatternInit)[];
  protocol: URLPatternURLPatternComponentResult;
  username: URLPatternURLPatternComponentResult;
  password: URLPatternURLPatternComponentResult;
  hostname: URLPatternURLPatternComponentResult;
  port: URLPatternURLPatternComponentResult;
  pathname: URLPatternURLPatternComponentResult;
  search: URLPatternURLPatternComponentResult;
  hash: URLPatternURLPatternComponentResult;
}

declare class URLSearchParams {
  constructor(init?: URLSearchParamsInit);
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  entries(): IterableIterator<[key: string, value: string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  forEach<This = unknown>(
    callback: (
      this: This,
      key: string,
      value: string,
      parent: URLSearchParams
    ) => void,
    thisArg?: This
  ): void;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
  toString(): string;
}

declare type URLSearchParamsInit =
  | URLSearchParams
  | string
  | Record<string, string>
  | [key: string, value: string][];

/**
 * Back compat for code migrating to older definitions.
 * This technically isn't part of a standard either way, but the naming
 * is more consistent.
 * @deprecated Use URLSearchParamsInit instead.
 */
declare type URLSearchParamsInitializer = URLSearchParamsInit;

interface UnderlyingSink {
  type?: string;
  start?(controller: WritableStreamDefaultController): any;
  write?(chunk: any, controller: WritableStreamDefaultController): any;
  abort?(reason: any): any;
  close?(): any;
}

interface UnderlyingSource {
  type?: string;
  autoAllocateChunkSize?: number;
  start?(
    controller: ReadableStreamDefaultController | ReadableByteStreamController
  ): any;
  pull?(
    controller: ReadableStreamDefaultController | ReadableByteStreamController
  ): any;
  cancel?(reason?: any): any;
}

declare abstract class WorkerGlobalScope extends EventTarget<WorkerGlobalScopeEventMap> {}

declare type WorkerGlobalScopeEventMap = {
  fetch: FetchEvent;
  scheduled: ScheduledEvent;
  unhandledrejection: PromiseRejectionEvent;
  rejectionhandled: PromiseRejectionEvent;
};

declare class WritableStream {
  constructor(
    underlyingSink?: UnderlyingSink,
    queuingStrategy?: StreamQueuingStrategy
  );
  readonly locked: boolean;
  abort(reason: any): Promise<void>;
  close(): Promise<void>;
  getWriter(): WritableStreamDefaultWriter;
}

declare abstract class WritableStreamDefaultController {
  readonly signal: AbortSignal;
  error(reason?: any): void;
}

declare class WritableStreamDefaultWriter {
  constructor(stream: WritableStream);
  readonly closed: Promise<void>;
  readonly ready: Promise<void>;
  readonly desiredSize: number | null;
  abort(reason: any): Promise<void>;
  close(): Promise<void>;
  write(chunk: any): Promise<void>;
  releaseLock(): void;
}

/**
 * Back-compat alias.
 * @deprecated Use WritableStreamDefaultWriter
 */
declare type WritableStreamWritableStreamDefaultWriter =
  WritableStreamDefaultWriter;

declare function addEventListener<Type extends keyof WorkerGlobalScopeEventMap>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetAddEventListenerOptions | boolean
): void;

declare function atob(data: string): string;

declare function btoa(data: string): string;

declare const caches: CacheStorage;

declare function clearInterval(timeoutId: number | null): void;

declare function clearTimeout(timeoutId: number | null): void;

declare const console: Console;

declare const crypto: Crypto;

declare function dispatchEvent(
  event: WorkerGlobalScopeEventMap[keyof WorkerGlobalScopeEventMap]
): boolean;

declare function fetch(
  request: Request | string,
  requestInitr?: RequestInit | Request
): Promise<Response>;

declare const navigator: Navigator;

declare const origin: void;

declare function queueMicrotask(task: Function): void;

declare function removeEventListener<
  Type extends keyof WorkerGlobalScopeEventMap
>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetEventListenerOptions | boolean
): void;

declare const scheduler: Scheduler;

declare const self: ServiceWorkerGlobalScope;

declare function setInterval<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;

declare function setTimeout<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;

declare function structuredClone(
  value: any,
  options?: ServiceWorkerGlobalScopeStructuredCloneOptions
): any;
