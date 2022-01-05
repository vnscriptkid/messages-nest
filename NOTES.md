## validation

- pkgs:
  - `class-validator`: turns json to dto class instance
  - `class-transformer`: validate those class instances
- how type info are leaked to js from ts:

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

## IoC, DI

- Inversion of control:

  - class should not instantiate another class itself.
    - why? while testing, change implementation
    - depends on contract not concrete implementation, code is loosely coupled
  - the task should bubbled up over to DI container/injector

- DI container
  - components
    - deps mapping: class X: [ it's deps ]
    - all class instances have been created
