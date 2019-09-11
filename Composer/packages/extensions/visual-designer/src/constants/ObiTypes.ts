export const ObiTypes = {
  // dialogs
  AdaptiveDialog: 'Microsoft.AdaptiveDialog',

  // recognizers
  RegexRecognizer: 'Microsoft.RegexRecognizer',
  LuisRecognizer: 'Microsoft.LuisRecognizer',
  MultiLanguageRecognizer: 'Microsoft.MultiLanguageRecognizer',
  QnARecognizer: 'Microsoft.QnARecognizer',

  // events
  OnUnknownIntent: 'Microsoft.OnUnknownIntent',
  OnIntent: 'Microsoft.OnIntent',
  OnEvent: 'Microsoft.OnEvent',
  OnConversationUpdateActivity: 'Microsoft.OnConversationUpdateActivity',

  // steps
  BeginDialog: 'Microsoft.BeginDialog',
  SendActivity: 'Microsoft.SendActivity',

  InitProperty: 'Microsoft.InitProperty',
  SetProperty: 'Microsoft.SetProperty',
  EditArray: 'Microsoft.EditArray',
  SaveEntity: 'Microsoft.SaveEntity',
  DeleteProperty: 'Microsoft.DeleteProperty',

  IfCondition: 'Microsoft.IfCondition',
  SwitchCondition: 'Microsoft.SwitchCondition',
  AttachmentInput: 'Microsoft.AttachmentInput',
  Foreach: 'Microsoft.Foreach',
  ForeachPage: 'Microsoft.ForeachPage',

  TextInput: 'Microsoft.TextInput',
  NumberInput: 'Microsoft.NumberInput',
  IntegerInput: 'Microsoft.IntegerInput',
  FloatInput: 'Microsoft.FloatInput',
  ConfirmInput: 'Microsoft.ConfirmInput',
  ChoiceInput: 'Microsoft.ChoiceInput',

  EndDialog: 'Microsoft.EndDialog',
  CancelAllDialogs: 'Microsoft.CancelAllDialogs',
  ReplaceDialog: 'Microsoft.ReplaceDialog',
  RepeatDialog: 'Microsoft.RepeatDialog',
  EndTurn: 'Microsoft.EndTurn',

  EditSteps: 'Microsoft.EditSteps',

  EmitEvent: 'Microsoft.EmitEvent',

  HttpRequest: 'Microsoft.HttpRequest',
  CodeStep: 'Microsoft.CodeStep',

  LogStep: 'Microsoft.LogStep',
  TraceActivity: 'Microsoft.TraceActivity',

  // virtual
  RuleGroup: 'VisualSDK.RuleGroup',
  StepGroup: 'VisualSDK.StepGroup',
  ChoiceDiamond: 'VisualSDK.ChoiceDiamond',
  ConditionNode: 'VisualSDK.ConditionNode',
  LoopIndicator: 'VisualSDK.LoopIndicator',
  ForeachDetail: 'VisualSDK.ForeachDetail',
  ForeachPageDetail: 'VisualSDK.ForeachPageDetail',
};