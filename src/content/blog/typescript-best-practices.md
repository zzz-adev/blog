---
title: "TypeScript Best Practices for Modern Development"
date: "2024-01-10"
published: true
tags: ["TypeScript", "JavaScript", "Best Practices", "Programming"]
---


TypeScript has become the de facto standard for building large-scale JavaScript applications. Its static type system helps catch errors early, improves code quality, and enhances developer productivity. In this post, I'll share some essential TypeScript best practices that I've learned through years of development experience.

## 1. Use Strict Mode Configuration

Always enable TypeScript's strict mode to catch more potential issues:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

These settings will help you write more robust code by catching common mistakes at compile time.

## 2. Prefer Type Annotations Over Type Assertions

Instead of using type assertions, which bypass TypeScript's type checking:

```typescript
// Avoid - type assertion
const user = data as User;

// Prefer - proper typing
interface ApiResponse {
  user: User;
  status: string;
}

const response: ApiResponse = await fetchUser();
const user = response.user;
```

Type annotations provide better type safety and catch more errors.

## 3. Use Union Types and Type Guards

Union types and type guards help handle different data shapes safely:

```typescript
type Status = 'loading' | 'success' | 'error';

interface LoadingState {
  status: 'loading';
}

interface SuccessState {
  status: 'success';
  data: User[];
}

interface ErrorState {
  status: 'error';
  error: string;
}

type AppState = LoadingState | SuccessState | ErrorState;

// Type guard function
function isSuccessState(state: AppState): state is SuccessState {
  return state.status === 'success';
}

// Usage
function handleState(state: AppState) {
  if (isSuccessState(state)) {
    // TypeScript knows state.data exists here
    console.log(state.data.length);
  }
}
```

## 4. Leverage Utility Types

TypeScript provides powerful utility types that can save you time:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserSummary = Pick<User, 'id' | 'name'>;

// Omit properties
type CreateUserRequest = Omit<User, 'id'>;

// Make properties readonly
type ReadonlyUser = Readonly<User>;

// Create a record type
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
```

## 5. Use Discriminated Unions for Complex States

Discriminated unions help model complex application states:

```typescript
interface LoadingAction {
  type: 'LOADING';
}

interface SuccessAction {
  type: 'SUCCESS';
  payload: User[];
}

interface ErrorAction {
  type: 'ERROR';
  error: string;
}

type Action = LoadingAction | SuccessAction | ErrorAction;

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'LOADING':
      return { status: 'loading' };
    case 'SUCCESS':
      // TypeScript knows action.payload exists
      return { status: 'success', data: action.payload };
    case 'ERROR':
      // TypeScript knows action.error exists
      return { status: 'error', error: action.error };
    default:
      // Exhaustiveness check
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
  }
}
```

## 6. Generic Functions and Constraints

Use generics to create reusable, type-safe functions:

```typescript
// Basic generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic with constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Generic interface
interface Repository<T> {
  find(id: string): Promise<T | null>;
  create(entity: Omit<T, 'id'>): Promise<T>;
  update(id: string, changes: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}
```
## Conclusion

These TypeScript best practices will help you write more maintainable, type-safe, and robust applications. Remember that TypeScript is a tool to help you catch errors early and improve your development experience. Don't fight the type system – embrace it and let it guide you toward better code.

The key is to start with strict settings, use the type system to model your domain accurately, and leverage TypeScript's powerful features like generics, utility types, and discriminated unions to write expressive, safe code.

Happy coding! 🚀

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Effective TypeScript](https://effectivetypescript.com/)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
