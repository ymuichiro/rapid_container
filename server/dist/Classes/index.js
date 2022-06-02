"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.SpreadsheetRangeClasses = exports.SpreadsheetSheetClasses = exports.SpreadsheetClasses = exports.GmailThreadClasses = exports.GmailMessageClasses = exports.GmailLabelClasses = exports.GmailDraftClasses = exports.GmailAttachmentClasses = exports.GmailClasses = exports.CalendarEventGuestClasses = exports.CalendarEventClasses = exports.CalendarClasses = exports.UtilityClasses = exports.ParserClasses = exports.ArrayClasses = exports.DateClasses = exports.LiteralClasses = exports.SystemClasses = void 0;
// Literals
const LiteralClasses = require("./ScriptClass/Literal");
exports.LiteralClasses = LiteralClasses;
const DateClasses = require("./ScriptClass/Date");
exports.DateClasses = DateClasses;
const ArrayClasses = require("./ScriptClass/Array");
exports.ArrayClasses = ArrayClasses;
const ParserClasses = require("./ScriptClass/Parser");
exports.ParserClasses = ParserClasses;
const UtilityClasses = require("./ScriptClass/Utility");
exports.UtilityClasses = UtilityClasses;
// Google
const CalendarClasses = require("./ScriptClass/Calendar");
exports.CalendarClasses = CalendarClasses;
const CalendarEventClasses = require("./ScriptClass/CalendarEvent");
exports.CalendarEventClasses = CalendarEventClasses;
const CalendarEventGuestClasses = require("./ScriptClass/CalendarEventGuest");
exports.CalendarEventGuestClasses = CalendarEventGuestClasses;
const GmailClasses = require("./ScriptClass/Gmail");
exports.GmailClasses = GmailClasses;
const GmailAttachmentClasses = require("./ScriptClass/GmailAttachment");
exports.GmailAttachmentClasses = GmailAttachmentClasses;
const GmailDraftClasses = require("./ScriptClass/GmailDraft");
exports.GmailDraftClasses = GmailDraftClasses;
const GmailLabelClasses = require("./ScriptClass/GmailLabel");
exports.GmailLabelClasses = GmailLabelClasses;
const GmailMessageClasses = require("./ScriptClass/GmailMessage");
exports.GmailMessageClasses = GmailMessageClasses;
const GmailThreadClasses = require("./ScriptClass/GmailThread");
exports.GmailThreadClasses = GmailThreadClasses;
const SpreadsheetClasses = require("./ScriptClass/Spreadsheet");
exports.SpreadsheetClasses = SpreadsheetClasses;
const SpreadsheetSheetClasses = require("./ScriptClass/SpreadsheetSheet");
exports.SpreadsheetSheetClasses = SpreadsheetSheetClasses;
const SpreadsheetRangeClasses = require("./ScriptClass/SpreadsheetRange");
exports.SpreadsheetRangeClasses = SpreadsheetRangeClasses;
const Types = require("../type");
exports.Types = Types;
const Literals = [
    ...Object.keys(LiteralClasses).map((key) => new LiteralClasses[key]()),
    ...Object.keys(DateClasses).map((key) => new DateClasses[key]()),
    ...Object.keys(ArrayClasses).map((key) => new ArrayClasses[key]()),
];
const Googles = [
    ...Object.keys(CalendarClasses).map((key) => new CalendarClasses[key]()),
    ...Object.keys(CalendarEventClasses).map((key) => new CalendarEventClasses[key]()),
    ...Object.keys(GmailClasses).map((key) => new GmailClasses[key]()),
    ...Object.keys(GmailAttachmentClasses).map((key) => new GmailAttachmentClasses[key]()),
    ...Object.keys(GmailDraftClasses).map((key) => new GmailDraftClasses[key]()),
    ...Object.keys(GmailLabelClasses).map((key) => new GmailLabelClasses[key]()),
    ...Object.keys(GmailMessageClasses).map((key) => new GmailMessageClasses[key]()),
    ...Object.keys(GmailThreadClasses).map((key) => new GmailThreadClasses[key]()),
    ...Object.keys(ParserClasses).map((key) => new ParserClasses[key]()),
    ...Object.keys(UtilityClasses).map((key) => new UtilityClasses[key]()),
    ...Object.keys(SpreadsheetClasses).map((key) => new SpreadsheetClasses[key]()),
    ...Object.keys(SpreadsheetSheetClasses).map((key) => new SpreadsheetSheetClasses[key]()),
    ...Object.keys(SpreadsheetRangeClasses).map((key) => new SpreadsheetRangeClasses[key]()),
];
const SystemClasses = [...Literals, ...Googles];
exports.SystemClasses = SystemClasses;
