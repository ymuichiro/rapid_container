"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunOptions = void 0;
const CalenderTriggerOptions = require("./CalenderTriggerOptions");
const DocumentTriggerOptions = require("./DocumentTriggerOptions");
const FormTriggerOptions = require("./FormTriggerOptions");
const SpreadsheetTriggerOptions = require("./SpreadsheetTriggerOptions");
const TimeTriggerOptions = require("./TimeTriggerOptions");
const RunOptions = [
    ...Object.keys(CalenderTriggerOptions).map((key) => new CalenderTriggerOptions[key]()),
    ...Object.keys(DocumentTriggerOptions).map((key) => new DocumentTriggerOptions[key]()),
    ...Object.keys(FormTriggerOptions).map((key) => new FormTriggerOptions[key]()),
    ...Object.keys(SpreadsheetTriggerOptions).map((key) => new SpreadsheetTriggerOptions[key]()),
    ...Object.keys(TimeTriggerOptions).map((key) => new TimeTriggerOptions[key]()),
];
exports.RunOptions = RunOptions;
