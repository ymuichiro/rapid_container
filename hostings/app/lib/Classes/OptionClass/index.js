"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTriggerOptions = exports.SpreadsheetTriggerOptions = exports.FormTriggerOptions = exports.DocumentTriggerOptions = exports.CalenderTriggerOptions = exports.RunOptions = void 0;
const CalenderTriggerOptions = require("./CalenderTriggerOptions");
exports.CalenderTriggerOptions = CalenderTriggerOptions;
const DocumentTriggerOptions = require("./DocumentTriggerOptions");
exports.DocumentTriggerOptions = DocumentTriggerOptions;
const FormTriggerOptions = require("./FormTriggerOptions");
exports.FormTriggerOptions = FormTriggerOptions;
const SpreadsheetTriggerOptions = require("./SpreadsheetTriggerOptions");
exports.SpreadsheetTriggerOptions = SpreadsheetTriggerOptions;
const TimeTriggerOptions = require("./TimeTriggerOptions");
exports.TimeTriggerOptions = TimeTriggerOptions;
const RunOptions = [
    ...Object.keys(CalenderTriggerOptions).map((key) => new CalenderTriggerOptions[key]()),
    ...Object.keys(DocumentTriggerOptions).map((key) => new DocumentTriggerOptions[key]()),
    ...Object.keys(FormTriggerOptions).map((key) => new FormTriggerOptions[key]()),
    ...Object.keys(SpreadsheetTriggerOptions).map((key) => new SpreadsheetTriggerOptions[key]()),
    ...Object.keys(TimeTriggerOptions).map((key) => new TimeTriggerOptions[key]()),
];
exports.RunOptions = RunOptions;
