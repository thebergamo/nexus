/**
 * This file was automatically generated by Nexus 0.9.11
 * Do not make changes to this file directly
 */


import { core } from "nexus"
declare global {
  interface NexusGenCustomDefinitionMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputType: { // input type
    answer?: number | null; // Int
    key: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Foo: { // root type
    argsTest: boolean; // Boolean!
    name: string; // String!
    ok: boolean; // Boolean!
  }
  Query: {};
  TestObj: { // root type
    a: NexusGenRootTypes['Bar']; // Bar!
    argsTest: boolean; // Boolean!
    item: string; // String!
    ok: boolean; // Boolean!
  }
  Bar: NexusGenRootTypes['Foo'] | NexusGenRootTypes['TestObj'];
  Baz: NexusGenRootTypes['TestObj'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: any;
  TestUnion: NexusGenRootTypes['Foo'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  InputType: NexusGenInputs['InputType'];
}

export interface NexusGenFieldTypes {
  Foo: { // field return type
    argsTest: boolean; // Boolean!
    name: string; // String!
    ok: boolean; // Boolean!
  }
  Query: { // field return type
    bar: NexusGenRootTypes['Bar']; // Bar!
    extended: NexusGenRootTypes['Bar']; // Bar!
  }
  TestObj: { // field return type
    a: NexusGenRootTypes['Bar']; // Bar!
    argsTest: boolean; // Boolean!
    item: string; // String!
    ok: boolean; // Boolean!
  }
  Bar: { // field return type
    argsTest: boolean; // Boolean!
    ok: boolean; // Boolean!
  }
  Baz: { // field return type
    a: NexusGenRootTypes['Bar']; // Bar!
    ok: boolean; // Boolean!
  }
}

export interface NexusGenArgTypes {
  Foo: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
  TestObj: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
  Bar: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  TestUnion: "Foo"
  Bar: "Foo" | "TestObj"
  Baz: "TestObj"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Foo" | "Query" | "TestObj";

export type NexusGenInputNames = "InputType";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Bar" | "Baz";

export type NexusGenScalarNames = "Boolean" | "Date" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = "TestUnion";

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}