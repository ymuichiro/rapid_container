// Literals
import AbstractRunOptions from "../../../interfaces/SystemClasses/RunOptions";
import * as CalenderTriggerOptions from "./CalenderTriggerOptions";
import * as DocumentTriggerOptions from "./DocumentTriggerOptions";
import * as FormTriggerOptions from "./FormTriggerOptions";
import * as SpreadsheetTriggerOptions from "./SpreadsheetTriggerOptions";
import * as TimeTriggerOptions from "./TimeTriggerOptions";

const RunOptions: AbstractRunOptions[] = [
  ...Object.keys(CalenderTriggerOptions).map(
    (key) => new CalenderTriggerOptions[key as keyof typeof CalenderTriggerOptions]()
  ),
  ...Object.keys(DocumentTriggerOptions).map(
    (key) => new DocumentTriggerOptions[key as keyof typeof DocumentTriggerOptions]()
  ),
  ...Object.keys(FormTriggerOptions).map((key) => new FormTriggerOptions[key as keyof typeof FormTriggerOptions]()),
  ...Object.keys(SpreadsheetTriggerOptions).map(
    (key) => new SpreadsheetTriggerOptions[key as keyof typeof SpreadsheetTriggerOptions]()
  ),
  ...Object.keys(TimeTriggerOptions).map((key) => new TimeTriggerOptions[key as keyof typeof TimeTriggerOptions]()),
];

export {
  RunOptions,
  CalenderTriggerOptions,
  DocumentTriggerOptions,
  FormTriggerOptions,
  SpreadsheetTriggerOptions,
  TimeTriggerOptions,
};
