import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver,
  Action: crudResolvers.ActionCrudResolver,
  Assignee: crudResolvers.AssigneeCrudResolver,
  Task: crudResolvers.TaskCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  },
  Notification: {
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    createOneNotification: actionResolvers.CreateOneNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    deleteOneNotification: actionResolvers.DeleteOneNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    findFirstNotificationOrThrow: actionResolvers.FindFirstNotificationOrThrowResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    notification: actionResolvers.FindUniqueNotificationResolver,
    getNotification: actionResolvers.FindUniqueNotificationOrThrowResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    updateOneNotification: actionResolvers.UpdateOneNotificationResolver,
    upsertOneNotification: actionResolvers.UpsertOneNotificationResolver
  },
  Action: {
    aggregateAction: actionResolvers.AggregateActionResolver,
    createManyAction: actionResolvers.CreateManyActionResolver,
    createOneAction: actionResolvers.CreateOneActionResolver,
    deleteManyAction: actionResolvers.DeleteManyActionResolver,
    deleteOneAction: actionResolvers.DeleteOneActionResolver,
    findFirstAction: actionResolvers.FindFirstActionResolver,
    findFirstActionOrThrow: actionResolvers.FindFirstActionOrThrowResolver,
    actions: actionResolvers.FindManyActionResolver,
    action: actionResolvers.FindUniqueActionResolver,
    getAction: actionResolvers.FindUniqueActionOrThrowResolver,
    groupByAction: actionResolvers.GroupByActionResolver,
    updateManyAction: actionResolvers.UpdateManyActionResolver,
    updateOneAction: actionResolvers.UpdateOneActionResolver,
    upsertOneAction: actionResolvers.UpsertOneActionResolver
  },
  Assignee: {
    aggregateAssignee: actionResolvers.AggregateAssigneeResolver,
    createManyAssignee: actionResolvers.CreateManyAssigneeResolver,
    createOneAssignee: actionResolvers.CreateOneAssigneeResolver,
    deleteManyAssignee: actionResolvers.DeleteManyAssigneeResolver,
    deleteOneAssignee: actionResolvers.DeleteOneAssigneeResolver,
    findFirstAssignee: actionResolvers.FindFirstAssigneeResolver,
    findFirstAssigneeOrThrow: actionResolvers.FindFirstAssigneeOrThrowResolver,
    assignees: actionResolvers.FindManyAssigneeResolver,
    assignee: actionResolvers.FindUniqueAssigneeResolver,
    getAssignee: actionResolvers.FindUniqueAssigneeOrThrowResolver,
    groupByAssignee: actionResolvers.GroupByAssigneeResolver,
    updateManyAssignee: actionResolvers.UpdateManyAssigneeResolver,
    updateOneAssignee: actionResolvers.UpdateOneAssigneeResolver,
    upsertOneAssignee: actionResolvers.UpsertOneAssigneeResolver
  },
  Task: {
    aggregateTask: actionResolvers.AggregateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    createOneTask: actionResolvers.CreateOneTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    deleteOneTask: actionResolvers.DeleteOneTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    task: actionResolvers.FindUniqueTaskResolver,
    getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
    groupByTask: actionResolvers.GroupByTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    updateOneTask: actionResolvers.UpdateOneTaskResolver,
    upsertOneTask: actionResolvers.UpsertOneTaskResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
  Notification: ["aggregateNotification", "createManyNotification", "createOneNotification", "deleteManyNotification", "deleteOneNotification", "findFirstNotification", "findFirstNotificationOrThrow", "notifications", "notification", "getNotification", "groupByNotification", "updateManyNotification", "updateOneNotification", "upsertOneNotification"],
  Action: ["aggregateAction", "createManyAction", "createOneAction", "deleteManyAction", "deleteOneAction", "findFirstAction", "findFirstActionOrThrow", "actions", "action", "getAction", "groupByAction", "updateManyAction", "updateOneAction", "upsertOneAction"],
  Assignee: ["aggregateAssignee", "createManyAssignee", "createOneAssignee", "deleteManyAssignee", "deleteOneAssignee", "findFirstAssignee", "findFirstAssigneeOrThrow", "assignees", "assignee", "getAssignee", "groupByAssignee", "updateManyAssignee", "updateOneAssignee", "upsertOneAssignee"],
  Task: ["aggregateTask", "createManyTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  FindUniqueCommentOrThrowArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  CreateOneNotificationArgs: ["data"],
  DeleteManyNotificationArgs: ["where"],
  DeleteOneNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNotificationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNotificationArgs: ["where"],
  FindUniqueNotificationOrThrowArgs: ["where"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpdateOneNotificationArgs: ["data", "where"],
  UpsertOneNotificationArgs: ["where", "create", "update"],
  AggregateActionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyActionArgs: ["data", "skipDuplicates"],
  CreateOneActionArgs: ["data"],
  DeleteManyActionArgs: ["where"],
  DeleteOneActionArgs: ["where"],
  FindFirstActionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstActionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueActionArgs: ["where"],
  FindUniqueActionOrThrowArgs: ["where"],
  GroupByActionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyActionArgs: ["data", "where"],
  UpdateOneActionArgs: ["data", "where"],
  UpsertOneActionArgs: ["where", "create", "update"],
  AggregateAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssigneeArgs: ["data", "skipDuplicates"],
  CreateOneAssigneeArgs: ["data"],
  DeleteManyAssigneeArgs: ["where"],
  DeleteOneAssigneeArgs: ["where"],
  FindFirstAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAssigneeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssigneeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssigneeArgs: ["where"],
  FindUniqueAssigneeOrThrowArgs: ["where"],
  GroupByAssigneeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssigneeArgs: ["data", "where"],
  UpdateOneAssigneeArgs: ["data", "where"],
  UpsertOneAssigneeArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  CreateOneTaskArgs: ["data"],
  DeleteManyTaskArgs: ["where"],
  DeleteOneTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTaskArgs: ["where"],
  FindUniqueTaskOrThrowArgs: ["where"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTaskArgs: ["data", "where"],
  UpdateOneTaskArgs: ["data", "where"],
  UpsertOneTaskArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  Comment: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  Notification: ["id", "user_id", "action_id", "readed_at"],
  Action: ["id", "group", "name", "created_at", "target_id", "target_type"],
  Assignee: ["id", "task_id", "user_id", "created_at"],
  Task: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateComment: ["_count", "_min", "_max"],
  CommentGroupBy: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateNotification: ["_count", "_min", "_max"],
  NotificationGroupBy: ["id", "user_id", "action_id", "readed_at", "_count", "_min", "_max"],
  AggregateAction: ["_count", "_min", "_max"],
  ActionGroupBy: ["id", "group", "name", "created_at", "target_id", "target_type", "_count", "_min", "_max"],
  AggregateAssignee: ["_count", "_min", "_max"],
  AssigneeGroupBy: ["id", "task_id", "user_id", "created_at", "_count", "_min", "_max"],
  AggregateTask: ["_count", "_min", "_max"],
  TaskGroupBy: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at", "_all"],
  UserMinAggregate: ["id", "name", "password", "password_digest", "active", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserMaxAggregate: ["id", "name", "password", "password_digest", "active", "email", "last_sign_in_at", "created_at", "updated_at"],
  CommentCountAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_all"],
  CommentMinAggregate: ["id", "owner_id", "target_id", "parent_id", "content", "created_at", "updated_at"],
  CommentMaxAggregate: ["id", "owner_id", "target_id", "parent_id", "content", "created_at", "updated_at"],
  NotificationCountAggregate: ["id", "user_id", "action_id", "readed_at", "_all"],
  NotificationMinAggregate: ["id", "user_id", "action_id", "readed_at"],
  NotificationMaxAggregate: ["id", "user_id", "action_id", "readed_at"],
  ActionCountAggregate: ["id", "group", "name", "created_at", "target_id", "target_type", "_all"],
  ActionMinAggregate: ["id", "created_at", "target_id"],
  ActionMaxAggregate: ["id", "created_at", "target_id"],
  AssigneeCountAggregate: ["id", "task_id", "user_id", "created_at", "_all"],
  AssigneeMinAggregate: ["id", "task_id", "user_id", "created_at"],
  AssigneeMaxAggregate: ["id", "task_id", "user_id", "created_at"],
  TaskCountAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_all"],
  TaskMinAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at"],
  TaskMaxAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserOrderByWithRelationInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentOrderByWithRelationInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_count", "_max", "_min"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "user_id", "action_id", "readed_at"],
  NotificationOrderByWithRelationInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "user_id", "action_id", "readed_at", "_count", "_max", "_min"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "action_id", "readed_at"],
  ActionWhereInput: ["AND", "OR", "NOT", "id", "group", "name", "created_at", "target_id", "target_type"],
  ActionOrderByWithRelationInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionWhereUniqueInput: ["id"],
  ActionOrderByWithAggregationInput: ["id", "group", "name", "created_at", "target_id", "target_type", "_count", "_max", "_min"],
  ActionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "group", "name", "created_at", "target_id", "target_type"],
  AssigneeWhereInput: ["AND", "OR", "NOT", "id", "task_id", "user_id", "created_at"],
  AssigneeOrderByWithRelationInput: ["id", "task_id", "user_id", "created_at"],
  AssigneeWhereUniqueInput: ["id"],
  AssigneeOrderByWithAggregationInput: ["id", "task_id", "user_id", "created_at", "_count", "_max", "_min"],
  AssigneeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "task_id", "user_id", "created_at"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskOrderByWithRelationInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskWhereUniqueInput: ["id"],
  TaskOrderByWithAggregationInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_count", "_max", "_min"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  UserCreateInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserUpdateInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserCreateManyInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserUpdateManyMutationInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  CommentCreateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentUpdateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentCreateManyInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentUpdateManyMutationInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  NotificationCreateInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationUpdateInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationCreateManyInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationUpdateManyMutationInput: ["id", "user_id", "action_id", "readed_at"],
  ActionCreateInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionUpdateInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionCreateManyInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionUpdateManyMutationInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  AssigneeCreateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneeUpdateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneeCreateManyInput: ["id", "task_id", "user_id", "created_at"],
  AssigneeUpdateManyMutationInput: ["id", "task_id", "user_id", "created_at"],
  TaskCreateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskUpdateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskCreateManyInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskUpdateManyMutationInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserCountOrderByAggregateInput: ["id", "name", "password", "password_digest", "active", "preferences", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserMaxOrderByAggregateInput: ["id", "name", "password", "password_digest", "active", "email", "last_sign_in_at", "created_at", "updated_at"],
  UserMinOrderByAggregateInput: ["id", "name", "password", "password_digest", "active", "email", "last_sign_in_at", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  CommentCountOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentMaxOrderByAggregateInput: ["id", "owner_id", "target_id", "parent_id", "content", "created_at", "updated_at"],
  CommentMinOrderByAggregateInput: ["id", "owner_id", "target_id", "parent_id", "content", "created_at", "updated_at"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  NotificationCountOrderByAggregateInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationMaxOrderByAggregateInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationMinOrderByAggregateInput: ["id", "user_id", "action_id", "readed_at"],
  ActionCountOrderByAggregateInput: ["id", "group", "name", "created_at", "target_id", "target_type"],
  ActionMaxOrderByAggregateInput: ["id", "created_at", "target_id"],
  ActionMinOrderByAggregateInput: ["id", "created_at", "target_id"],
  AssigneeCountOrderByAggregateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneeMaxOrderByAggregateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneeMinOrderByAggregateInput: ["id", "task_id", "user_id", "created_at"],
  TaskCountOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TaskMaxOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at"],
  TaskMinOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  CommentCreatetarget_typeInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  CommentUpdatetarget_typeInput: ["set", "push"],
  ActionCreategroupInput: ["set"],
  ActionCreatenameInput: ["set"],
  ActionCreatetarget_typeInput: ["set"],
  ActionUpdategroupInput: ["set", "push"],
  ActionUpdatenameInput: ["set", "push"],
  ActionUpdatetarget_typeInput: ["set", "push"],
  TaskCreatestateInput: ["set"],
  TaskUpdatestateInput: ["set", "push"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

